<script setup>
import custumFetch from '@/api';
import { FilterMatchMode } from '@primevue/core/api';
import { useToast } from 'primevue/usetoast';
import { onMounted, ref } from 'vue';


const toast = useToast();
const dt = ref();
const formDialog = ref(false);//myasetDialog
const deleteDialog = ref(false);
const deletesDialog = ref(false);
const selectedDatas = ref();
const token = ref('')
const submitted = ref(false);

const data = ref({});//myaset
const tabels = ref([]); //myasets
const datas = ref();

const kolomsTabel = ref();

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

const openNew = () => {
    data.value = {};
    alert(kolomsTabel.value[0].tabel)
    data.value.kol_tabelId = kolomsTabel.value[0]._id ;
    // submitted.value = false;
    formDialog.value = true;
}
function hideDialog() {
    formDialog.value = false;
    submitted.value = false;
}

async function saveData() {
    alert("simpan1")
    if (data?.value.kol_name?.trim()) {
        alert("simpan2")
        if (data.value._id) {
            alert("simpan3")
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
            alert("simpan4")
            console.log("new.......")
            const dataNew = await custumFetch.post('/dev/tabelkolom', {
                tabel :kolomsTabel.value[0].tabel,
                kol_name: data.value.kol_name,
                kol_tipe: data.value.kol_tipe,
                kol_unique: (data.value.kol_unique),
                kol_required:data.value.kol_required,
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
        // allData()
    }
}

const getKoloms = async () => {
    const param = await data.value.name
    try {
        const { data } = await custumFetch.get("/dev/kolombytabel/" + param, {
            withCredentials: false,
            headers: {
                'token': token.value
            },
        })
        kolomsTabel.value = data.data
    } catch (error) {
        console.log(error)
    }
}
</script>


<template>
    <Toast />
    <div class="card">
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
                        <!-- <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editData(slotProps.data)" /> -->
                        <Button icon="pi pi-trash" outlined rounded severity="danger"
                            @click="confirmDeleteData(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>


            <Dialog v-model:visible="formDialog" :style="{ width: '450px' }" header="Tabel Details" :modal="true">
            <div class="flex flex-col gap-6">
                <div>
                    <label for="tableId" class="block font-bold mb-3">Tabel ID</label>
                    <InputText id="kol_tabelId" v-model.trim="data.kol_tabelId" required="true" :invalid="submitted && !data.kol_tabelId" fluid />
                </div>
                <div>
                    <label for="kol_name" class="block font-bold mb-3">Name</label>
                    <InputText id="kol_name" v-model.trim="data.kol_name" required="true" :invalid="submitted && !data.kol_name"
                        fluid />
                    <small v-if="submitted && !data.kol_name" class="text-red-500">Name is required.</small>
                </div>

                <div>
                    <label for="kol_tipe" class="block font-bold mb-3">Tipe</label>
                    <InputText id="kol_tipe" v-model.trim="data.kol_tipe" required="true" :invalid="submitted && !data.kol_tipe" fluid />
                </div>

                <div>
                    <label for="kol_unique" class="block font-bold mb-3">Unique</label>
                    <InputText id="kol_unique" v-model.trim="data.kol_unique" required="true" :invalid="submitted && !data.kol_unique" fluid />
                </div>

                <div>
                    <label for="kol_required" class="block font-bold mb-3">Required</label>
                    <InputText id="kol_required" v-model.trim="data.kol_required" required="true" :invalid="submitted && !data.kol_required" fluid />
                </div>

                <div>
                    <label for="kol_default" class="block font-bold mb-3">Default</label>
                    <InputText id="kol_default" v-model.trim="data.kol_default" required="true" :invalid="submitted && !data.kol_default" fluid />
                </div>

                <!-- <div>
                    <label for="kol_defaut" class="block font-bold mb-3">kol_defaut</label>
                    <InputText id="kol_defaut" v-model.trim="data.kol_required" required="true" :invalid="submitted && !data.name" fluid />
                </div>

                <div>
                    <label for="kol_defaut" class="block font-bold mb-3">kol_defaut</label>
                    <InputText id="kol_defaut" v-model.trim="data.kol_required" required="true" :invalid="submitted && !data.name" fluid />
                </div> -->
                <!-- <div>
                    <label for="priv" class="block font-bold mb-3">Priv</label>
                    <Select id="priv" v-model.trim="data.priv" :options="privs" optionLabel="label"
                    optionValue="value" placeholder="Priviledge a Category" fluid></Select>
                </div>
                <div>
                    <label for="desc" class="block font-bold mb-3">Description</label>
                    <Textarea id="desc" v-model="data.desc" required="true" rows="3" cols="20" fluid />
                </div> -->
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" text @click="hideDialog" />
                <Button label="Save" icon="pi pi-check" @click="saveData" />
            </template>
        </Dialog>


    </div>

</template>