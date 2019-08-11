<template>
<div>
  <router-link to="/">Home</router-link>


 <div>
    <div id="policies">

            <table id="policies-table" class="table table-striped table-bordered" style="width:100%">
                <thead>
                    <tr>
                        <th>Policy Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="policy in myJson.policies">
                        <td>{{policy.PolicyNumber}}</td>
                        <td>{{policy.FirstName}}</td>
                        <td>{{policy.LastName}}</td>
                        <td>{{policy.Age}}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Policy Number</th>
                        <th>Fir st Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </tfoot>
            </table>

        </div>
</div>

</div>
</template>

<script>
import json from './../json/policy-owners.json'
// export default {
//     name: "DocumentComponent"
    
//   };

  export default {
    name: "DocumentComponent",
    data() {
      return {
        msg: "My Profile Component",
        json1:{a:"b",c:"d"},
        myJson: json
      };
    }
  };
  $(document).ready(function () {
            $('#policies-table').DataTable({
            });
        });

</script>

<style>
</style>

