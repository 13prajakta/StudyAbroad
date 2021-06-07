import '../Css/style.scss'
function College()
{
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
                    <tr>
                    <th scope="row">1</th>
                    <td>University of Toronto.</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>University of British Columbia.</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>McGill University.</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>McMaster University.</td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>University of Alberta.</td>
                    </tr>
                    <tr>
                    <th scope="row">6</th>
                    <td>University of Montreal.</td>
                    </tr>
                    <tr>
                    <th scope="row">7</th>
                    <td>University of Calgary.</td>
                    </tr>
                    <tr>
                    <th scope="row">8</th>
                    <td>University of Ottawa.</td>
                    </tr>
                </tbody>
                </table>
           </div>
        </>
    )
}
export default College