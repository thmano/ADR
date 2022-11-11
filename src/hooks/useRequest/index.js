import { useEffect } from 'react'
import api from '../../services/api'

const useRequest = ({endPoint, setData}) => {

    useEffect(() => {

        api.get(endPoint)
        .then(function (response) {
            
            console.log(response);
        })
        .catch(function (error) {
            
            console.error(error);
        })
    }, [])
  

}
export default useRequest