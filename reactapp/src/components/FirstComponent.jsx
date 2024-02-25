const FirstComponent = () => {
    const HandleClick = () => {
        alert('Clicou!')
    }

    return(
        <div>
            <h2>Quero mostrar um popup na tela!</h2>
            <button onClick={HandleClick}>
                Evento
            </button>
        </div>         
    );
};

export default FirstComponent;