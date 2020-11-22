=== WIP ===

- Fix avatar look in community cards (hover)
- Build function to add items
- Fix items showing in inventory
- Add basic search functionality (items and users)
- Friends-functionality
- Build dropdown in notification bar
  - Profile [NYI] > Inventory > New Item > Settings [NYI] > Log out
- Friendslist should overlap other content

=== BUGS ===

- fix bug with leftbar when expanding hamburger and then expanding windows width
- fix bug med leftbar expandarad av hamburger, när man ökar width så återkommer inte main och om man stänger den så återkommer inte leftbar vid ökar width
- Leftbaren hidas inte korrekt om man klickat på någon av länkarna i leftbar
  och sedan minskar width
- ProfileHeader laddar inte in data efter login, kräver en refresh.
- Inventory laddar inte in användarens items

  .
  .

=== VERSIONS ===

v.20.11.22

- Removed Uppgift4 temporary code
- Refactored folder layout in frontend (hooks etc.)

v.20.11.14

- Changed name of Avatar to ProfileHeader
- Created new Avatar for communityView etc.
- Name and Image now gets data from backend instead of dummy data
- Fixed better design in communityView
- Fixed bug with Cards width in min 675px width

v.20.11.10

- Implemented backend (locally) and database (mongoDB) to the app
- Able to register new user via backend (locally)
- Able to login via backend using JWT auth (locally)
- New LoadingSpinner component
- Modal and ErrorModal components
- Refactored context and hooks to work with backend
- Implemented basic way to see users under community

v.20.10.22:

- Refactored all CSS code
- Fixed alignment in Avatar component
- Added more design, many new hover effects

v.20.10.21:

- Hiding elements when not logged in
- Added friends button functionality
- Added hamburger functionality (showing and hiding left bar)
- Added sign in button
- Reworked overall CSS, all views now share #view in global.css
- many bug fixes with CSS

v.20.10.20:

- Context user implemented so it's available in entire app.
- Design changes overall, darker theme, button and other UI design added.

v.20.10.15:

- Design fully implemented from HTML version.
