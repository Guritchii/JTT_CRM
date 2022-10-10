import React from 'react';

const Connexion = () => {
    return (
        <div>
            {/* Create a connexion page */}
            <h1>Connexion</h1>

            {/* Create a form */}
            <form className="connexionBox" onSubmit={e => e.preventDefault()}>
                <input type="text" placeholder="Pseudo" required />
                <button type="submit">GO</button>
                
            </form>
            
        </div>
    );
};

export default Connexion;