Till Arasto:
Det mesta av uppgift3-lösningen finns samlat i src / view / HomeView.js

-=================-
-= UPPGIFT 3 =-
-=================-

För betyget Godkänt:

> > DONE 1. Din applikation skall göra minst ett HTTP anrop till
> > ett API som retunerar data ifrån valfritt API som framträder
> > i ditt GUI på valfritt sätt.
> > (Vi kommer sedan justera API anropet när vårt API i Node.js är färdigt)

> > Två exempel på API’er man kan använda sig av:
> > Pokemon API: https://pokeapi.co/
> > Starwars API: https://swapi.dev/

> > DONE 2. Din applikation skall använda sig av useState hook.
> > (Du skall använda både variabeln & funktionen)

3. Ladda upp era uppdateringar(alternativt det nya projektet) till Github.

För betyget Väl Godkänt:

> > DONE 1. Med hjälp av useContext Hook skall din applikation
> > spara ett globalt värde i en komponent som därefter hämtas
> > ifrån en annan komponent som använder sig av det globala värdet.

> > DONE 2. Din applikation skall använda sig av useEffect Hook.
> > Förslagsvis i samband med ett API anrop.

3. Ladda upp era uppdateringar(alternativt det nya projektet) till Github.

.
.
.
.
.
.
.
.

-================-
-= TO DO / BUGS =-
-================-

- Friendslist ska overlappa all annan content istället för att dölja main
- Refactorera app.js: lägg till MainNavigation i Navigation som samlar leftbar, header, rightbar
- build LoadingSpinner component
- build Modal/ErrorModal component
- fix bug with leftbar when expanding hamburger and then expanding windows width
- fix bug med leftbar expandarad av hamburger, när man ökar width så återkommer inte main och om man stänger den så återkommer inte leftbar vid ökar width
- Add basic search functionality

- BACKEND
- DATABASE

.
.
.
.
.
.
.
.

-============-
-= VERSIONS =-
-============-

v.20.10.15:

- Design fully implemented from HTML version.

v.20.10.20:

- Context user implemented so it's available in entire app.
- Design changes overall, darker theme, button and other UI design added.

v.20.10.21:

- Hiding elements when not logged in
- Added friends button functionality
- Added hamburger functionality (showing and hiding left bar)
- Added sign in button
- Reworked overall CSS, all views now share #view in global.css
- many bug fixes with CSS

v.20.10.22:

- Refactored all CSS code
- Fixed alignment in Avatar component
- Added more design, many new hover effects
