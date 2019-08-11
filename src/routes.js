import DocumentComponent from './components/DocumentComponent.vue';
import PolicyComponent from './components/PolicyComponent.vue';

const routes = [
    { path: '/', component: PolicyComponent },
    { path: '/policy', component: PolicyComponent },

    { path: '/documents/:policyNum', component: DocumentComponent }
];

export default routes;