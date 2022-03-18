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
          <el-input></el-input>
        </el-form-item>
        <el-cascader
          :options="dummyProjectList"
          :props="props"
          placeholder="Projects"
          clearable
        />
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
      }
    }
  }
}

</script>
