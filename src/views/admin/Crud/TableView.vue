<script setup>
import custumFetch from '@/api';
import { FilterMatchMode } from '@primevue/core/api';
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';
import DatePicker from 'primevue/datepicker';
// import { useCookies } from 'vue3-cookies'
// import { defineStore } from "pinia";

const toast = useToast();
const dt = ref();
const formDialog = ref(false);//myasetDialog
const deleteDialog = ref(false);
const deletesDialog = ref(false);
const selectedDatas = ref();
const token = ref('')
const submitted = ref(false);

const data = ref({});//myaset
const categories = ref([]); //myasets
const datas = ref();

const privs = ref([
    { label: 'Private', value: 'Private' },
    { label: 'Public', value: 'Public' },
    { label: 'All', value: 'All' }
]);


const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});






onMounted(() => {
    token.value = localStorage.getItem('token')
    allData()
});

const allData = async () => {
   try {
       const { data } = await custumFetch.get("/dev/alltables", {
           withCredentials: false,
           headers: {
               'token': token.value
           },
       })
       datas.value = data.data
   } catch (error) {
       console.log(error)
   }
}





function openNew() {
    data.value = {};
    submitted.value = false;
    formDialog.value = true;
}

function hideDialog() {
    formDialog.value = false;
    submitted.value = false;
}

async function saveData() {
    if (data?.value.name?.trim()) {
        if (data.value._id) {
            console.log("edit......")
            const dataEdit = await custumFetch.put('/dev/tabel/' + data.value._id, {
                name: data.value.name,
                desc: data.value.desc,
                priv: (data.value.priv),
            }, {
                withCredentials: false,
                headers: {
                    'token': token.value
                },
            })
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Myaset Updated', life: 3000 });
        } else {
            const dataNew = await custumFetch.post('/dev/tabel', {
                name: data.value.name,
                desc: data.value.desc,
                priv: (data.value.priv),
            }, {
                withCredentials: false,
                headers: {
                    'token': token.value
                },
            })
            toast.add({ severity: 'success', summary: 'Successful', detail: 'Myaset Created', life: 3000 });
        }

        formDialog.value = false;
        data.value = {};
        allData()
    }
}
async function confirmDeleteData(prod) {
    data.value = prod;
    deleteDialog.value = true;
}

async function deleteData() {
    datas.value = datas.value.filter((val) => val.id !== data.value.id);
    const dataDelete = await custumFetch.delete('/dev/tabel/' + data.value._id,
        {
            withCredentials: false,
            headers: {
                'token': token.value
            },
        }
    )
    deleteDialog.value = false;
    data.value = {};
    toast.add({ severity: 'success', summary: 'Successful', detail: 'Data Deleted', life: 3000 });
    allData()
}

function editData(prod) {
    data.value = { ...prod };
    formDialog.value = true;
}


</script>

<template>
    <div>
        <Toast />
        <div class="card">
            <Toolbar class="mb-6">
                <template #start>
                    <Button label="New" icon="pi pi-plus" severity="secondary" class="mr-2" @click="openNew" />
                </template>

                <template #end>
                    <Button label="Export" icon="pi pi-upload" severity="secondary" @click="exportCSV($event)" />
                </template>
            </Toolbar>

            <DataTable ref="dt" v-model:selection="selectedDatas" :value="datas" dataKey="id" :paginator="true"
                :rows="10" :filters="filters"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                :rowsPerPageOptions="[5, 10, 25]"
                currentPageReportTemplate="Showing {first} to {last} of {totalRecords} datas">
                <template #header>
                    <div class="flex flex-wrap gap-2 items-center justify-between">
                        <h4 class="m-0">Manage MyTabel</h4>
                        <IconField>
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText v-model="filters['global'].value" placeholder="Search..." />
                        </IconField>
                    </div>
                </template>

                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <!-- <Column field="_id" header="ID" sortable style="min-width: 12rem"></Column>  681878cd96bd04d62c6e93b1-->
                <Column field="_id" header="Id" sortable style="min-width: 12rem"></Column>
                <Column field="name" header="Name" sortable style="min-width: 12rem"></Column>
                <Column field="desc" header="Description" sortable style="min-width: 10rem"></Column>
                <Column field="priv" header="Priviledge" sortable style="min-width: 16rem">
                    <!-- <template #body="slotProps">
                        {{ getCategory(slotProps.data.category) }}
                    </template> -->
                </Column>
                <!-- <Column field="tgl" header="Tanggal" sortable style="min-width: 16rem">
                    <template #body="{ data }"> -->
                        <!-- {{ formatDate(data.tgl) }} -->
                    <!-- </template>
                </Column> -->
                <Column :exportable="false" style="min-width: 12rem" header="Action">
                    <template #body="slotProps">
                        <!-- <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editData(slotProps.data)" /> -->
                        <Button icon="pi pi-trash" outlined rounded severity="danger"
                            @click="confirmDeleteData(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>
        </div>

        <Dialog v-model:visible="formDialog" :style="{ width: '450px' }" header="Tabel Details" :modal="true">
            <div class="flex flex-col gap-6">
                <!-- <img v-if="data.image" :src="`https://primefaces.org/cdn/primevue/images/myaset/${data.image}`"
                    :alt="data.image" class="block m-auto pb-4" /> -->
                <div>
                    <label for="name" class="block font-bold mb-3">Name</label>
                    <InputText id="name" v-model.trim="data.name" required="true" :invalid="submitted && !data.name"
                        fluid />
                    <small v-if="submitted && !data.name" class="text-red-500">Name is required.</small>
                </div>
                <div>
                    <label for="priv" class="block font-bold mb-3">Priv</label>
                    <Select id="priv" v-model.trim="data.priv" :options="privs" optionLabel="label"
                    optionValue="value" placeholder="Priviledge a Category" fluid></Select>
                </div>
                <div>
                    <label for="desc" class="block font-bold mb-3">Description</label>
                    <Textarea id="desc" v-model="data.desc" required="true" rows="3" cols="20" fluid />
                </div>
            </div>
            
         
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" text @click="hideDialog" />
                <Button label="Save" icon="pi pi-check" @click="saveData" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deleteDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
            <div class="flex items-center gap-4">
                <i class="pi pi-exclamation-triangle !text-3xl" />
                <span v-if="data">Are you sure you want to delete <b>{{ data.name }}</b>?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteDialog = false" />
                <Button label="Yes" icon="pi pi-check" @click="deleteData" />
            </template>
        </Dialog>

        <Dialog v-model:visible="deletesDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
            <div class="flex items-center gap-4">
                <i class="pi pi-exclamation-triangle !text-3xl" />
                <span v-if="data">Are you sure you want to delete the selected datas?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deletesDialog = false" />
                <Button label="Yes" icon="pi pi-check" text @click="deleteSelectedMyasets" />
            </template>
        </Dialog>
    </div>
</template>