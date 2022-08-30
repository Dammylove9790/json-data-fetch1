


    let fetch_results = document.getElementById("fetch_results");
    let answer =   `<table class="table table-light table-striped border">
                        <thead class="bg-danger text-white">
                            <tr>
                                <th>SN</th>
                                <th>NAME</th>
                                <th>EMAIL</th>
                                <th>ADDRESS</th>
                                <th>GEO</th>
                                <th>WEBSITE</th>
                            </tr>
                        </thead>
                        <tbody>`


    let n = 1;

  fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    for(let i = 0; i < data.length; i++){
        answer += `<tr class='shadow'>
        <td> ${n++} </td>
        <td> ${data[i].name} </td>
        <td> ${data[i].email} </td>
        <td> ${data[i].address.city} </td>
        <td> lat: ${data[i].address.geo.lat}  lng: ${data[i].address.geo.lng} </td>
        <td> ${data[i].website} </td>
        <tr>` 

    }
    answer += `</tbody>
                <tfoot class="thead-dark">
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>`;
    fetch_results.innerHTML = answer;
  })





//     let fetch_results = document.getElementById("fetch_results");
//     let results =   `<table class="table table-light table-striped border">
//                         <thead class="bg-danger text-white">
//                             <tr>
//                                 <th>SN</th>
//                                 <th>NAME</th>
//                                 <th>EMAIL</th>
//                                 <th>ADDRESS</th>
//                                 <th>GEO</th>
//                                 <th>WEBSITE</th>
//                             </tr>
//                         </thead>
//                         <tbody>`

//     fetch('http://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then((data) => {
//       data.forEach((user) => {
//           results += `<tr class='shadow'>
//           <td> ${i++} </td>
//           <td> ${user.name} </td>
//           <td> ${user.email} </td>
//           <td> ${user.address.city} </td>
//           <td> lat: ${user.address.geo.lat}  lng: ${user.address.geo.lng} </td>
//           <td> ${user.website} </td>
//           <tr>` 
//         })

//     results += `</tbody>
//                 <tfoot class="thead-dark">
//                     <tr>
//                         <th></th>
//                         <th></th>
//                         <th></th>
//                         <th></th>
//                         <th></th>
//                         <th></th>
//                     </tr>
//                 </tfoot>
//             </table>`;
// fetch_results.innerHTML = results;
// })
