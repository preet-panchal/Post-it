<template>
    <div>
        <h1>Log in to see your posts and to create new posts!</h1>
        <div class="dashboard">
            <h3 v-on:click="showDashboard" class="option">Dashboard</h3> |
            <h3 v-on:click="showCreate" class="option">Create</h3> |
            <h3 v-on:click="showAnalytics" class="option">Analytics</h3>
        </div>
  
        <div v-if="isDashboardHidden" class="content">
            <p>Dashboard</p>
        </div>
        <div v-if="isCreateHidden" class="content">
            <div class="title">
                <p>Post Title:</p>
                <input v-model="title" placeholder="Title">
            </div>
            <div class="body">
                <p>Post Body:</p>
                <textarea v-model="body" placeholder="Post Body"></textarea>
            </div>
            <button class="button">Post-It!</button>
        </div>
        <div v-if="isAnalyticsHidden" class="content">
            <p>Anayltics</p>
        </div>
    </div>
</template>

<script>

export default {
    name: "ProfileView",
    data() {
        return {
            isHidden: false,
            isDashboardHidden: true,
            isCreateHidden: false,
            isAnalyticsHidden: false
        }
    },
    methods: {
        showDashboard() {
            this.isDashboardHidden = true;
            this.isCreateHidden = false;
            this.isAnalyticsHidden = false;
        },
        showCreate() {
            this.isDashboardHidden = false;
            this.isCreateHidden = true;
            this.isAnalyticsHidden = false;
        },
        showAnalytics() {
            this.isDashboardHidden = false;
            this.isCreateHidden = false
            this.isAnalyticsHidden = true;
        }
    }
};
</script>


<style lang="scss" scoped>

.dashboard {
    display: inline-flex;
    font-size: 20px;
}

.option {
    padding-right: 20px;
    padding-left: 20px;
    cursor: pointer;
}

.content {
    margin-top: 50px;
}

.body {
    padding-bottom: 20px;
    font-size: 25px;
}

textarea {
    width: 800px;
    height: 300px;
}

input {
    width: 400px;
    height: 30px;
}
</style>