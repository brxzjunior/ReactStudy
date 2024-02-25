const SecondComponent = () => {
    const name = 'Braz'

    return(
        <div>
            <button onClick={() =>{
                console.log('Clicado para o console!')
            }}>
                Clique, {name}
            </button>
        </div>         
    );
};

export default SecondComponent;