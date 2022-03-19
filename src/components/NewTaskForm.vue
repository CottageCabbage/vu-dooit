<template>
  <el-form>
    <el-form-item label="Task:">
      <el-input v-model="newTaskText"></el-input>
    </el-form-item>
    <el-cascader
      :options="dummyProjectList"
      :props="props"
      placeholder="Projects"
      clearable
    />
    <el-select v-model="selectedPriority" placeholder="Priority">
      <el-option
        v-for="priority in dummyPriorityList"
        :key="priority.value"
        :label="priority.label"
        :value="priority.value"
      />
    </el-select>
    <el-button type="primary">Done</el-button>
  </el-form>
</template>
<script>
export default {
  name: 'NewTaskForm'
}
</script>
