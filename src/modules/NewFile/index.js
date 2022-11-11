import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {  useLocation, useNavigate } from 'react-router-dom'
import api from '../../services/api'
import RenderAdr from './components/RenderAdr'
import './style.css'

const NewFile = () => {
 
    const { register, handleSubmit } = useForm()

    const [title, setTitle] = useState()
    const [status, setStatus] = useState()
    const [context, setContext] = useState()
    const [decision, setDecision] = useState()
    const [consequence, setConsequence] = useState()
    const [adr, setAdr] = useState()
    const navigate = useNavigate();
    const addAdr = data => {
       
        const date = new Date()
        
        if(id){
            api
        .put('api/ADR/'+id, {
            id: id,
            title: title,
            status: Number(status),
            context: context,
            decision: decision,
            consequences: consequence,
            markdownGenerated: "string",
            creationDate: date.toISOString()
        })
        .then((res) => {
          if (res.data && res.data.HasErrors) throw new Error('Error on update')
          
          
        })
        .catch((error) => {
         console.log(error)
        })  
        navigate('/history')

        }else{

            api
            .post('api/ADR', {
                title: data.title,
                status: Number(data.status),
                context: data.context,
                decision: data.decision,
                consequences: data.consequence,
                markdownGenerated: "string",
                creationDate: date.toISOString()
            })
            .then((res) => {
                if (res.data && res.data.HasErrors) throw new Error('Error on update')
            })
            .catch((error) => {
                console.log(error)
            })
            navigate('/history')
        }
    }

    var statusSelect = ''

    useEffect(() => {
        switch (status) {
            case 0:
                // eslint-disable-next-line react-hooks/exhaustive-deps
                statusSelect = 'Rascunho'
                break;
            case 1:
                statusSelect = 'Revisado'
                break;
            case 2:
                statusSelect = 'Aprovado'
                break;
            case 3:
                statusSelect = 'Recusado'
                break;
            default:
                statusSelect = ''
                break;
        }

        setAdr(`**${title}**\n\n**Status**\n\n${statusSelect}\n\n**Contexto**\n\n${context}\n\n**Decições**\n\n${decision}\n\n**Consequencias**\n\n${consequence}`)

    },[title, status, context, decision, consequence])

    const copi = () => {
        navigator.clipboard.writeText(adr)
    }

    const download = () => {
        const date = new Date()
        
        if(id){
            api
        .post('download', {
            id: id,
            title: title,
            status: Number(status),
            context: context,
            decision: decision,
            consequences: consequence,
            markdownGenerated: "string",
            creationDate: date.toISOString()
        })
        .then((res) => {
          if (res.data && res.data.HasErrors) throw new Error('Error on update')
        })
        .catch((error) => {
         console.log(error)
        })
    }
    }

    const { search } = useLocation()
    const [id, setId] = useState()

    useEffect(() => {

        if(search.includes('id')){
            const auxId = search.split('=')[1]
            api.get('api/ADR/'+auxId)
            .then(function (response) {
                setId(response.data.id)
                setTitle(response.data.title)
                setStatus(response.data.status)
                setContext(response.data.context)
                setDecision(response.data.decision)
                setConsequence(response.data.consequences)
            })
            .catch(function (error) {
                console.error(error);
            })
        }
    }, [search])


    return(
        <div className="container">
            <div className="form">
                <form onSubmit={handleSubmit(addAdr)}>
                    <label from='#title'>Titulo</label>
                    <input type='text' id="title" className="input textINput" name='title' {...register("title")} 
                     onChange={(e) => setTitle(e.target.value)}  value={title}/>

                    <label from='#select'>Status</label>
                    <select className="input textINput" id="select" value={status} name='status' {...register("status")}  onChange={(e) => setStatus(e.target.value)} >
                        <option></option>
                        <option value={2}>Aprovado</option>
                        <option value={0}>Rascunho</option>
                        <option value={3}>Reprovado</option>
                        <option value={1}>Revisado</option>
                    </select>

                    <label>Contexto</label>
                    <textarea  className="input" rows='4' cols='30' value={context} name='context' {...register("context")} onChange={(e) => setContext(e.target.value)}></textarea>

                    <label>Decisões</label>
                    <textarea className="input" rows='4' cols='30' value={decision} name='decision' {...register("decision")} onChange={(e) => setDecision(e.target.value)}></textarea>

                    <label>Consequencias</label>
                    <textarea className="input" rows='4' cols='30' value={consequence} name='consequence' {...register("consequence")} onChange={(e) => setConsequence(e.target.value)} ></textarea>
                    <div className='buttons'>
                        <btn onClick={download} className='button down'>Download</btn>
                        <btn onClick={copi} className='button copi'>Copiar</btn>
                        <button type='submit'  className='button save'>Salvar</button>
                    </div>
                </form>
            </div>
            <div className="renderAdr">
                <RenderAdr document={adr}/>
            </div>
        </div>
    )
}

export default NewFile