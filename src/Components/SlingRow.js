import SlingContainer from "./SlingContainer"
import "../CSS/sling.css"

export default function SchoolRow(){
    return(
        <div className="row rowSl">
            <SlingContainer/>
            <SlingContainer/>
            <SlingContainer/>
            <SlingContainer/>
            <SlingContainer/>
        </div>
    )
}