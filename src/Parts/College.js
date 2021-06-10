import '../Css/style.scss'
import {useEffect,useState} from 'react'
import axios from 'axios';
import { connect } from "react-redux"
function College(props)
{
    useEffect(() => {
        
        let apiurl ="http://127.0.0.1:8000/api/universities"
            axios({
                url: apiurl,
                method:"get",
            }).then((response) => {
                //.log("response from university api",response.data)
                props.dispatch({
                    type: "UNIVERSITY",
                    payload: response.data.data
                })
            }, (error) => {
                console.log("error from signup api", error)
            })
    }, [props.isUni]);
    
    //console.log("universities",props.university)
    return(
        <>
           <div className="container coll">
               <h2 >Top University Of Canada</h2>
               <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">UNIVERSITIES</th>
                    </tr>
                </thead>
                <tbody>
                {props.university?.length > 0 && props.university.map((each, index) => {
                    return(
                    <tr>
                    <th scope="row">{each.id}</th>
                    <td>{each.university}</td>
                    </tr>
                    )
                     })
                    }
                </tbody>
                </table>
           </div>
        </>
    )
}
export default connect(function (state, prop) {
    return {
        isloggedin: state?.isloggedin,
        university:state?.university,
        isUni:state?.isUni
    }
})(College)