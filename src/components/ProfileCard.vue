<template>
  <div id="profile-card" class="bg-white flex lg:flex-row md:flex-col flex-col justify-between p-6">
    <div class="flex flex-col mb-4 mr-0 lg:mr-4 md:mr-0 lg:mb-0 md:mb-4">
      <div class="profile-title">Name</div>
      <div class="profile-details">{{ profileData.name }}</div>
    </div>
    <div class="profile-last-details flex lg:flex-row md:flex-col flex-col justify-around">
      <section class="flex flex-col">
        <div class="profile-title">Phone number</div>
        <div class="profile-details">
          +{{
            profileData.phoneNumber.replace(
              /\D*(\d{3})\D*(\d{4})\D*(\d{4})\D*/,
              "$1 $2 $3"
            )
          }}
        </div>
      </section>
      <section class="flex flex-col">
        <div class="profile-title">Date Added</div>
        <div class="profile-details">{{ profileDates.dateAdded }}</div>
      </section>
      <section class="flex flex-col">
        <div class="profile-title">Last Updated</div>
        <div class="profile-details">{{ profileDates.lastUpdated }}</div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import type { Ref } from "vue";
import profileData from "../utils/profileData";
import ProfileDates from "../types/ProfileDates";

export default defineComponent({
  setup() {
    const profileDates: Ref<ProfileDates> = ref({
      dateAdded: "",
      lastUpdated: "",
    });

    function convertDate(profileDateConv: string): string {
      // 2022-08-02T09:51:00.000Z
      const dateArr: Array<string> = profileDateConv.split("T");
      const dateSplit: Array<string> = dateArr[0].split("-");
      const hrsMins: string = dateArr[1].split(".")[0].slice(0, -3);

      return `${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}, ${hrsMins}`;
    }

    onMounted(() => {
      profileDates.value.dateAdded = convertDate(profileData.dateAdded);
      profileDates.value.lastUpdated = convertDate(profileData.lastUpdated);
    });
    return {
      profileData,
      profileDates,
    };
  },
});
</script>

<style scoped>
#profile-card {
  background-image: repeating-linear-gradient(
      45deg,
      var(--gray-100) 25%,
      transparent 25%,
      transparent 75%,
      var(--gray-100) 75%,
      var(--gray-100)
    ),
    repeating-linear-gradient(
      45deg,
      var(--gray-100) 25%,
      transparent 25%,
      transparent 75%,
      var(--gray-100) 75%,
      var(--gray-100)
    );
  background-position: 0 0, 10px 10px;
  background-size: calc(2 * 10px) calc(2 * 10px);
}
.profile-title {
  font-weight: 300;
}
.profile-last-details section {
  @apply mb-4 mr-0 lg:mr-4 md:mr-0 lg:mb-0 md:mb-4;
}
.profile-details {
  @apply font-bold;
}
</style>
