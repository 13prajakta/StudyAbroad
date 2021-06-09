import '../Css/style.scss'
import {useEffect,useState} from 'react'
import axios from 'axios';
import { connect } from "react-redux"
function Scholership(props) {
    useEffect(() => {
        
        let apiurl ="http://127.0.0.1:8000/api/scholershiplist"
            axios({
                url: apiurl,
                method:"get",
            }).then((response) => {
                console.log("response from scholership api",response.data)
                props.dispatch({
                    type: "SCHOLERSHIP",
                    payload: response.data.data
                })
            }, (error) => {
                console.log("error from signup api", error)
            })
    }, [props.isscholer]);
    return (
        <>
            <div className="scholer container">
                <h2>Scholarships to study in Canada</h2>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">S. No.</th>
                            <th scope="col">Name of the scholarship</th>
                            <th scope="col">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.scholership?.length > 0 && props.scholership.map((each, index) => {
                    return(
                        <tr>
                            <th scope="row" key={index}>{index + 1}</th>
                            <td>{each.scholership_name}</td>
                            <td>{each.detail}</td>
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
        scholership:state?.scholership,
        isscholer:state?.isscholer
    }
})(Scholership)