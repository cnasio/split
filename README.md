-=UPPGIFT 2=-

> > DONE 1. Skapa ett React project (det är OK att använda sig av .tsx, typescript)

> > Kommandon för att starta sitt projekt:
> > npx create-react-app projektnamn
> > npx create-react-app projektnamn –typescript

> > OBS: Du måste ha Node installerat för att kunna exekvera detta kommando.
> > Du kan se vilken version av node du har i din CMD med kommandot: Node -v

> > DONE 2. Strukturera projektet och ta bort det obehövliga samt lägg till mappar för den struktur som önskas

> > Exempel: https://github.com/ArastoSahbaei/MondialChefRecipeApplication
> > Det fnns ytterligare ett exempel i Google Classroom under fliken ’React -> Projektstruktir i React’

> > DONE 3. Applicera de vyer som önskas för din applikation (minst 2 vyer)

> > DONE 4. Installera react-router-dom paketet i ditt projekt och skapa en komponent som hanterar navigationen i din applikation.

> > dokumentation för react-router-dom: https://reactrouter.com/web/guides/quick-start

> > DONE 5. I applikationen skall man kunna logga in och se det användarnamn som användes för att logga in i applikationen som även skall sparas i webbläsaren. (OK att hårdkoda detta)

> > För instruktioner om hur man sparar variabler i webbläsaren se gärna:
> > https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

> > DONE 6. Ladda upp ditt projekt till Github

-= TO DO/BUGS =-

- build avatar component
- build LoadingSpinner component (from MERN project)
- build Modal/ErrorModal component
- fix bug with leftbar when expanding hamburger and then expanding windows width
- center leftbar when expanded by hamburger (also profilecard & leftbarnavlinks now lining up correctly)
- Add basic search functionality

-= VERSIONS =-
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
