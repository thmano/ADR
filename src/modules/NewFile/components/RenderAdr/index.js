import ReactMarkdown from 'react-markdown'
import './style.css'

const RenderAdr = ({document}) => {
    return(
        <div className="render">
          <ReactMarkdown children={document} />
        </div>
    )
}
export default RenderAdr