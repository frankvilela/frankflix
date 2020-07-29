import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria (){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(key, value){
        setValues({
            ...values,
            [key]: value
        });
    }

    function handleChange(e) {
        const {getAttribute, value} = e.target;
        
        setValue(getAttribute('name'), value);
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={function handleSubmit(e){
                e.preventDefault();

                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais);
            }}>
                <FormField
                    field="input"
                    label="Nome:"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField 
                    field="textarea"
                    label="Descrição:"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField 
                    field="input"
                    label="Cor:"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />
                <div>
                    <label>
                        Descrição:
                        <textarea type="textarea" name='descricao' value= {values.descricao} 
                        onChange={handleChange}/>
                    </label>
                </div>
                <div>
                    <label>
                        Nome:
                        <input type="color" name='cor' value= {values.cor} 
                        onChange={handleChange}/>
                    </label>
                </div>
            
                <button>
                    Cadastrar
                </button>
            </form>
            
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    );
                })}
            </ul>

            <Link to="/">
                Inicio
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;