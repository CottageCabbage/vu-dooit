<template>
  <el-header>
    <router-link to="/">
      <box-icon type='solid' name='badge-check' id="logo"></box-icon>
    </router-link>
    <input
      type="text"
      name=""
      id="searchInput"
      placeholder="Search..."
    />

    <box-icon name='plus'
      @click="addTaskFormVisible = true"
    ></box-icon>
    <el-dialog v-model="addTaskFormVisible" title="Create New Task">
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
      </el-form>
    </el-dialog>

    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <box-icon
          type='solid'
          name='cog'
        ></box-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>
            <el-switch
              v-model="settings.darkMode"
              active-text="Dark Mode"
            ></el-switch>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

  </el-header>
</template>
<script>
import '@/assets/styles/header.scss'

import { useSettingsStore } from '@/store/settings.js'

export default {
  name: 'HeaderContainer',
  data () {
    return {
      settings: useSettingsStore(),
      addTaskFormVisible: false,
      newTaskText: '',
      dummyProjectList: [
        {
          value: 'inbox',
          label: 'Inbox'
        },
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency'
                }
              ]
            }
          ]
        }
      ],
      props: {
        checkStrictly: true
      },
      dummyPriorityList: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' }
      ],
      selectedPriority: ''
    }
  }
}

</script>
