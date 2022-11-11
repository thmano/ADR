import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import './style.css'

const HisotryFile = () => {


    const [files, setFile] = useState()

    useEffect(() => {
        api.get('api/ADR')
        .then(function (response) {
            setFile(response.data)
        })
        .catch(function (error) {
            console.error(error);
        })
    }, [])
     
 
    return(
        <div className="container"> 
        {
         files?.map((item, index) => (
            <Link to={`/New?id=${item.id}`}  key={index}  className='linkHistory'>
                <div className="file">
                    <InsertDriveFileIcon style={{fontSize: '53px'}} className='icon'/>
                    { item.title }
                </div>
            </Link>
        ))   
        }
        
        </div>
    )
}

export default HisotryFile