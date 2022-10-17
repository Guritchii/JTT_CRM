// import React from 'react';
// import CryptoJS from 'crypto-js';


// const Connexion = () => {
//     return (
//         <div className="page_connexion">
//             {/* Create a connexion page */}
//             <img className="logo" srcSet="./LogoApp.svg"></img>
//             <form>
//                 <table className="formulaire_de_connexion">
//                     <tr className="connexion_text">
//                         Connexion
//                     </tr>
//                     <tr>
//                         <input id="pseudo" className="text_zone" type="text" placeholder="Pseudo" />
//                     </tr>
//                     <tr>
//                         <input id="password" className="text_zone" type="password" placeholder="Mot de passe" />
//                     </tr>
//                     <tr className="envoyer">
//                         <div className="memory_me">
//                             <label htmlFor="checkbox">Se souvenir de moi</label>
//                             <input type="checkbox" />
//                         </div>
//                         <button type="submit" onClick={sendPseudo}>Se connecter</button>
//                     </tr>
//                 </table>
//             </form>


//             <a className="forgot_pw" href="http://localhost">Mot de passe oublié ?</a>
//         </div>
//     );
// };

// /* Envoyer le pseudo et le mot de passe */
// function sendPseudo() {
//     var pseudo = document.getElementById("pseudo").value;
//     var password = document.getElementById("password").value;
//     // transforme le pseudo en son format sha256
//     console.log(password);
//     var password = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
//     console.log(password);
//     var data = {
//         pseudo: pseudo,
//         password: password
//     };
//     console.log(data);
//     // var xhr = new XMLHttpRequest();
//     // xhr.open("POST", "http://localhost:3000/api/auth/login", true);
//     // xhr.setRequestHeader('Content-Type', 'application/json');
//     // xhr.send(JSON.stringify(data));
//     // xhr.onreadystatechange = function () {
//     //     if (xhr.readyState === 4 && xhr.status === 200) {
//     //         var json = JSON.parse(xhr.responseText);
//     //         console.log(json);
//     //     }
//     // }
// }


// export default Connexion;