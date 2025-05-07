<template>
    <Dialog v-model:visible="props.dialog" :style="{ width: '450px' }" header="Myaset Details" :modal="true">
           <div class="flex flex-col gap-6">
               <div>
                   <label for="name" class="block font-bold mb-3">Label</label>
                   <InputText id="name" v-model.trim="props.data.label" required="true" fluid />
               </div>
               <div>
                   <label for="value" class="block font-bold mb-3">Value</label>
                   <InputText id="Value" v-model.trim="props.data.value" required="true" fluid />
               </div>
           </div>
           
           <template #footer>
               <Button label="Cancel" icon="pi pi-times" text @click="$emit('closeDialog',data)" />
               <Button label="Save" icon="pi pi-check" @click="$emit('handleSubmit',data)" />
           </template>
           <!-- {{ props.data._id }} -->
       </Dialog>
</template>

<script setup>


const props = defineProps({
   dialog : Boolean,
   action : String,
   data : {
    type: Object,

   }
})
const emit = defineEmits(["closeDialog","simpanData","handleSubmit"])


</script>