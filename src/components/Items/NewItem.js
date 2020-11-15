import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../FormElements/Input/Input';
import Button from '../FormElements/Button/Button';
import ErrorModal from '../UIElements/ErrorModal/ErrorModal';
import LoadingSpinner from '../UIElements/LoadingSpinner/LoadingSpinner';
import ImageUpload from '../FormElements/ImageUpload/ImageUpload';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { UserContext } from '../../shared/context/UserContext';
import './ItemForm.css';

const NewItem = () => {
  const auth = useContext(UserContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      image: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const itemSubmitHandler = async e => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', formState.inputs.title.value);
      formData.append('description', formState.inputs.description.value);
      formData.append('image', formState.inputs.image.value);

      await sendRequest(process.env.REACT_APP_BACKEND_URL + '/items', 'POST', formData, {
        Authorization: 'Bearer ' + auth.token,
      });
      history.push('/');
    } catch (err) {}
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <form className="item-form" onSubmit={itemSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (at least 5 characters)."
          onInput={inputHandler}
        />
        <ImageUpload
          id="image"
          onInput={inputHandler}
          errorText="Please provide an image."
        />
        <Button type="submit" disabled={!formState.isValid}>
          ADD ITEM
        </Button>
      </form>
    </>
  );
};

export default NewItem;