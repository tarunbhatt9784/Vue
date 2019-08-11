<template>
<div>

    <div id="policies">

            <table id="policies-table" class="table table-striped table-bordered" style="width:100%">
                <thead>
                    <tr>
                        <th>Policy Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Detailed Documentation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="policy in myJson.policies">
                        <td>{{policy.PolicyNumber}}</td>
                        <td>{{policy.FirstName}}</td>
                        <td>{{policy.LastName}}</td>
                        <td>{{policy.Age}}</td>
                        <td><router-link :to="{name: 'documents', params: {policyNum: policy.PolicyNumber}}">See Uploaded Documents</router-link></td>

                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Policy Number</th>
                        <th>Fir st Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Detailed Documentation</th>
                    </tr>
                </tfoot>
            </table>

        </div>
          <p>{{ reversedMessage }}</p>

</div>
</template>

<script>
import json from './../json/policy-owners.json'
  import routes from '../routes'
export default {
    name: "PolicyComponent",
    data() {
      return {
        msg: "My Profile Component",
        json1:{a:"b",c:"d"},
        myJson: json
      };
    },
    computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      $(document).ready(function () {
            $('#policies-table').DataTable({
            });
        });
      return ''
    }
  }
    
  };
  
</script>

<style>
body {
        background: url("https://mdbootstrap.com/img/Photos/Others/img (50).jpg") no-repeat center center
    }

    #policies {
        padding-left: 15em;
        padding-right: 15em;
        padding-top: 1em;
    }

    #policies-table {
        background-color: white;
    }</style>

