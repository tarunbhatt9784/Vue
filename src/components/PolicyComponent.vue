<template>
<div>
  
  <p>{{myJson}}</p>
  </div>
</template>

<script>
import json from './../json/policy-owners.json'
export default {
    name: "PolicyComponent",
    data() {
      return {
        msg: "My Profile Component",
        myJson: json
      };
    }
  };
</script>

