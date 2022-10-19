import React from 'react';

const Admin_supp = () => {
    return (
        <div className="page_admin">
            {/* Create a page to delete an user in the admin page*/}
            
            <p className="Titre">Admin</p>
            <form className="formulaire">
                <table className="Formulaire_de_recherche">
                    <tr>
                        <input id="personne" type="search" className="texte_barre" placeholder="🔎 Rechercher un utilisateur" /*onClick={tab}*//>
                    </tr>
                    <tr>

                    </tr>
                </table>
            </form>
        </div>
    );
};

/*function tab(){
    var tab = new Array();
    if(Create_user()){
        tab.push(nom, prenom);
    }
    console.log(tab);
}*/

export default Admin_supp;