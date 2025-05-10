<script setup>
import custumFetch from '@/api';
import { FilterMatchMode } from '@primevue/core/api';
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';




const toast = useToast();
const dt = ref();
const formDialog = ref(false);//myasetDialog
const deleteDialog = ref(false);
const deletesDialog = ref(false);
const selectedDatas = ref();
const token = ref('')
const submitted = ref(false);
const spinner = ref(false)

const data = ref({});//myaset
const tabels = ref([]); //myasets
const datas = ref();
const tabelSelected = ref();

const kolomsTabel = ref();
const tipes = ref([
    { label: 'String', value: 'String' },
    { label: 'Number', value: 'Number' },
    { label: 'Boolean', value: 'Boolean' },
    { label: 'Date', value: 'Date' }
])
const yesNo = ref([
    { label: 'No', value: 'No' },
    { label: 'Yes', value: 'Yes' },
])

const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS }
});

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

const openNew = async () => {
    if (data.value.name == '' || data.value.name == null) {
        alert("Pilih tabel terlebih dahulu")
    } else {
        const tabel = await custumFetch.get('/dev/findtabel/' + data.value.name,
            {
                withCredentials: false,
                headers: {
                    'token': token.value
                },
            }
        )
        data.value = {};
        //hasil dari tabel dalam bentuk array
        data.value.kol_tabelId = tabel.data.data[0]._id
        data.value.tabel = tabel.data.data[0].name
        data.value.name = tabel.data.data[0].name
        tabelSelected.value = tabel.data.data[0].name
        formDialog.value = true;
    }
}
function hideDialog() {
    formDialog.value = false;
    submitted.value = false;
}
async function confirmDeleteData(prod) {
    data.value._id = prod._id;
    deleteDialog.value = true;
}

// async function deleteSelected() {
//     const myasetDelete = await custumFetch.delete('/dev/kolombytabel/' + data.value._id,
//         {
//             withCredentials: false,
//             headers: {
//                 'token': token.value
//             },
//         }
//     )
//     deleteDialog.value = false;
//     const dataValueName =data.value.name
//     data.value = {};
//     toast.add({ severity: 'success', summary: 'Successful', detail: 'Kolom Tabel Deleted', life: 3000 });
//     data.value.name = dataValueName
//     await getKoloms();
// }




async function saveData() {
    if (data?.value.kol_name?.trim()) {
        if (data.value._id) {
            // console.log("edit.....data.") tidak ada edit
        } else {
            const dataNew = await custumFetch.post('/dev/tabelkolom', {
                tabel: data.value.tabel,
                kol_name: data.value.kol_name,
                kol_tipe: data.value.kol_tipe,
                kol_unique: (data.value.kol_unique),
                kol_required: data.value.kol_required,
                kol_default: data.value.kol_default,
                kol_tabelId: data.value.kol_tabelId,
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
        data.value.name = tabelSelected.value
        getKoloms();
    }
}

const getKoloms = async () => {
    spinner.value = true
    const param = await data.value.name
    try {
        // const { data } = await custumFetch.get("/dev/kolombytabel/" + param, {
        const result = await custumFetch.get("/dev/kolombytabel/" + param, {
            withCredentials: false,
            headers: {
                'token': token.value
            },
        })
        kolomsTabel.value = result.data.data
        spinner.value = false
    } catch (error) {
        console.log(error)
    }

}
</script>


<template>
    <Toast />
    <div class="card">
        <LoadingSpinner v-if="spinner" />
        <Toolbar class="mb-6">
            <template #start>
                <Select id="tabel" v-model.trim="data.name" :options="tabels" optionLabel="name" optionValue="name"
                    placeholder="Tabels" @value-change="getKoloms">
                </Select>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button label="New" icon="pi pi-plus" severity="secondary" class="mr-2" @click="openNew" />
            </template>

            <template #end>
                <Button label="Export" icon="pi pi-upload" severity="secondary" @click="exportCSV($event)" />
            </template>
        </Toolbar>

        <!-- :selection="selectedDatas" -->
        <DataTable ref="dt" v-model:selection="selectedDatas" :value="kolomsTabel" dataKey="id" :paginator="true"
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
            <Column field="_id" header="Id" sortable style="min-width: 12rem"></Column>
            <Column field="kol_name" header="Name Kolom" sortable style="min-width: 12rem"></Column>
            <Column field="kol_tipe" header="Tipe" sortable style="min-width: 10rem"></Column>
            <Column field="kol_unique" header="Unique" sortable style="min-width: 16rem"></Column>
            <Column field="kol_required" header="Required" sortable style="min-width: 10rem"></Column>
            <Column field="kol_default" header="Default" sortable style="min-width: 10rem"></Column>
            <Column field="kol_tabelId" header="TableId" sortable style="min-width: 10rem"></Column>
            <Column :exportable="false" style="min-width: 12rem" header="Action">
                <template #body="slotProps">
                    <Button icon="pi pi-trash" outlined rounded severity="danger"
                        @click="confirmDeleteData(slotProps.data)" />
                </template>
            </Column>
        </DataTable>


        <Dialog v-model:visible="formDialog" :style="{ width: '450px' }" header="Tabel Details" :modal="true">
            <div class="flex flex-col gap-6">
                <div>
                    <label for="tableId" class="block font-bold mb-3">Tabel ID</label>
                    <InputText id="kol_tabelId" v-model.trim="data.kol_tabelId" required="true"
                        :invalid="submitted && !data.kol_tabelId" fluid readonly="" />
                </div>
                <div>
                    <label for="kol_name" class="block font-bold mb-3">Name Kolom</label>
                    <InputText id="kol_name" v-model.trim="data.kol_name" required="true"
                        :invalid="submitted && !data.kol_name" fluid />
                    <small v-if="submitted && !data.kol_name" class="text-red-500">Name is required.</small>
                </div>

                <div class="flex flex-wrap gap-4">
                    <div class="flex flex-col grow basis-0 gap-2">
                        <label for="kol_tipe" class="block font-bold mb-3">Tipe</label>
                        <Select id="kol_tipe" v-model.trim="data.kol_tipe" :options="tipes" optionLabel="label"
                            optionValue="value" placeholder="Tipe">
                        </Select>
                    </div>
                    <div class="flex flex-col grow basis-0 gap-2">
                        <label for="kol_unique" class="block font-bold mb-3">Unique</label>
                        <Select id="kol_unique" v-model.trim="data.kol_unique" :options="yesNo" optionLabel="label"
                            optionValue="value" placeholder="Unique">
                        </Select>
                    </div>
                </div>

                <div class="flex flex-wrap gap-4">
                    <div class="flex flex-col grow basis-0 gap-2">
                        <label for="kol_required" class="block font-bold mb-3">Required</label>
                        <!-- <InputText id="kol_required" v-model.trim="data.kol_required" required="true" :invalid="submitted && !data.kol_required" fluid /> -->
                        <Select id="kol_required" v-model.trim="data.kol_required" :options="yesNo" optionLabel="label"
                            optionValue="value" placeholder="Required"></Select>
                    </div>
                </div>

                <div>
                    <label for="kol_default" class="block font-bold mb-3">Default</label>
                    <InputText id="kol_default" v-model.trim="data.kol_default" required="true"
                        :invalid="submitted && !data.kol_default" fluid />
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
                <span v-if="data">Are you sure you want to delete the selected datas?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" text @click="deleteDialog = false" />
                <Button label="Yes" icon="pi pi-check" text @click="deleteSelected" />
            </template>
        </Dialog>

    </div>

</template>