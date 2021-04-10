<template>
  <div>
    <div v-if="labelType === 'ai-assigned'" class="status-label label-green">
      <p class="status-label__text"><q-icon name="fa fa-magic" />Assigned</p>
    </div>

    <div
      v-if="labelType === 'manual-assigned'"
      class="status-label label-green"
    >
      <p class="status-label__text"><q-icon name="fa fa-check" />Assigned</p>
    </div>

    <div v-if="labelType === 'stored'" class="status-label label-blue">
      <p class="status-label__text">Stored</p>
    </div>

    <div v-if="labelType === 'pending'" class="status-label label-grey">
      <p class="status-label__text">Pending</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatusLabel",
  props: {
    labelType: String
  }
};
</script>
