<script setup>
import { ref,onMounted } from 'vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import custumFetch from '@/api';
import Textarea from 'primevue/textarea';
import {test,createModel} from '@/stores/scriptStores.js'



const spinner = ref(false)
const data = ref({})
const token = ref('')
const tabels = ref([]);
const modelScript = ref('')
const controllerScript=ref('')
const routerScript = ref('')


onMounted(() => {
    token.value = localStorage.getItem('token')
    getTabel()
});
const getTabel = async () => {
    try {
        const { data } = await custumFetch.get("/dev/alltables", {
            withCredentials: false,
            headers: {
                'token': token.value
            },
        })
        tabels.value = data.data
    } catch (error) {
        console.log(error)
    }
}

const createScript = async()=>{
    spinner.value = true
    //get tabel columns
    try {
        const result = await custumFetch.get("/dev/createcrudmodel/" + data.value.name, {
            withCredentials: false,
            headers: {
                'token': token.value
            },
        })
        // spinner.value = false
        modelScript.value = result.data
    } catch (error) {
        console.log(error)
    }
    try {
        const result = await custumFetch.get("/dev/createcrudcontroller/" + data.value.name, {
            withCredentials: false,
            headers: {
                'token': token.value
            },
        })
        // spinner.value = false
        controllerScript.value = result.data
    } catch (error) {
        console.log(error)
    }

    try {
        const result = await custumFetch.get("/dev/createrouter/" + data.value.name, {
            withCredentials: false,
            headers: {
                'token': token.value
            },
        })
        routerScript.value = result.data
    } catch (error) {
        console.log(error)
    }
    
    spinner.value = false
}
</script>

<template>
    <div>
        <Toast />
        <div class="card">
            <LoadingSpinner v-if="spinner" />
            <Toolbar class="mb-6">
                <template #start>
                    <Select id="tabel" v-model.trim="data.name" :options="tabels" optionLabel="name" optionValue="_id"
                        placeholder="Tabels">
                    </Select>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button label="Script" icon="pi pi-plus" severity="secondary" class="mr-2" @click="createScript" />
                </template>

                <template #end>
                    <Button label="Export" icon="pi pi-upload" severity="secondary" @click="exportCSV($event)" />
                </template>
            </Toolbar>


            <Tabs value="0">
            <TabList>
                <Tab value="0">Model</Tab>
                <Tab value="1">Controller</Tab>
                <Tab value="2">Router</Tab>
            </TabList>
            <TabPanels>
                <TabPanel value="0">
                    <div class="card flex">
                        <Textarea v-model="modelScript " autoResize rows="30" cols="100" />
                    </div>
                    <!-- <p class="m-0">
                            {{ modelScript.data }}                   
                    </p> -->
                </TabPanel>
                <TabPanel value="1">
                    <div class="card flex">
                        <Textarea v-model="controllerScript " autoResize rows="30" cols="100" />
                    </div>
                </TabPanel>
                <TabPanel value="2">
                    <div class="card flex">
                        <Textarea v-model="routerScript " autoResize rows="30" cols="100" />
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>




        </div>
    </div>
</template>