import React, { useState, useContext } from 'react';

import { UserContext } from '../../../shared/context/UserContext';
import Card from '../../UIElements/Card/Card';
import Button from '../../FormElements/Button/Button';
import Modal from '../../UIElements/Modal/Modal';
import ErrorModal from '../../UIElements/ErrorModal/ErrorModal';
import LoadingSpinner from '../../UIElements/LoadingSpinner/LoadingSpinner';
//import Map from '../../../shared/components/UIElements/Map/Map';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import './Item.css';

const Item = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(UserContext);
//  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
//  const openMapHandler = () => setShowMap(true);
//  const closeMapHandler = () => setShowMap(false);

  const showDeleteWarningHandler = () => setShowConfirmModal(true);
  const cancelDeleteHandler = () => setShowConfirmModal(false);

  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);

    try {
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + `/items/${props.id}`,
        'DELETE',
        null,
        {
          Authorization: 'Bearer ' + auth.token,
        }
      );
      props.onDelete(props.id);
    } catch (err) {}
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {/* <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal> */}
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="item__modal-actions"
        footer={
          <>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </>
        }
      >
        <p>Do you want to permanently delete this item? This cannot be undone.</p>
      </Modal>
      <li className="item">
        <Card className="item__content">
          {isLoading && <LoadingSpinner asOverlay />}
          <div className="item__image">
            <img
              src={`${process.env.REACT_APP_ASSET_URL}/${props.image}`}
              alt={props.title}
            />
          </div>
          <div className="item__info">
            <h2>{props.title}</h2>
            {/* <h3>{props.address}</h3> */}
            <p>{props.description}</p>
          </div>
          <div className="item__actions">
            {/* <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button> */}
            {auth.userId === props.currentUser && (
              <Button to={`/items/${props.id}`}>EDIT</Button>
            )}
            {auth.userId === props.currentUser && (
              <Button danger onClick={showDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};

export default Item;
