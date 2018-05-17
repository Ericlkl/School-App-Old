<template>
    <!-- Can not submit yet. The input field is not complete -->
    <div class="box">
        <h1 class="title is-3 has-text-centered">Your Register information</h1>
        <!-- Given Name -->
        <div class="field is-grouped">
        <label class="label">Given Name :</label>
        <div class="control">
            <input class="input" type="text" placeholder="Text input">
        </div>
        </div>
        <!-- Family Name -->
        <div class="field is-grouped">
        <label class="label">Family Name :</label>
        <div class="control">
        <input class="input" type="text" placeholder="Text input">
        </div>
        </div>
        <!-- Address -->
        <div class="field is-grouped">
        <label class="label">Address :</label>
        <div class="control">
        <input class="input" type="text" placeholder="Text input">
        </div>
        </div>
        <!-- Gender -->
        <div class="field is-grouped">
        <label class="label">Gender :</label>
        <div class="control">
            <label class="radio">
            <input type="radio" name="question">
            Male
            </label>
            <label class="radio">
            <input type="radio" name="question">
            Female
            </label>
        </div>
        </div>
        <!-- Email-->
        <div class="field is-grouped">
        <label class="label">Email :</label>
        <div class="control">
        <input class="input" type="text" placeholder="Text input">
        </div>
        </div>
        <!-- Phone Number-->
        <div class="field is-grouped">
        <label class="label">Phone Number :</label>
        <div class="control">
        <input class="input" type="text" placeholder="Text input">
        </div>
        </div>
        <!-- Parent Name-->
        <div class="field is-grouped">
        <label class="label">Parent Name:</label>
        <div class="control">
        <input class="input" type="text" placeholder="Text input">
        </div>
        </div>
        <!-- Parent Phone Number-->
        <div class="field is-grouped">
        <label class="label">Parent Phone Number:</label>
        <div class="control">
        <input class="input" type="text" placeholder="Text input">
        </div>
        </div>

        <!-- checkbox for terms and conditions -->
        <div class="field">
        <div class="control">
            <label class="checkbox">
            <input type="checkbox">
            I have read and agree to the <a href="#">terms and conditions</a>
            </label>
        </div>
        </div>

        <!-- Submit Button -->
        <div class="field is-grouped">
        <div class="control">
            <button class="button is-link">Submit</button>
        </div>
        <div class="control">
            <button class="button is-text">Cancel</button>
        </div>
        </div>

    </div>
</template>

<script>

export default {
  
}
</script>
<style scoped>

</style>
