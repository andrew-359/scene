declare module 'vue' {
  export interface GlobalComponents {
    UIButton: typeof import('./baseComponents/BaseButton.vue')[`default`]
    UIInputText: typeof import('./baseComponents/BaseInputText.vue')[`default`]
    UIInputPassword: typeof import('./baseComponents/BaseInputPassword.vue')[`default`]
    UISelect: typeof import('./baseComponents/BaseSelect.vue')[`default`]
    UIForm: typeof import('./baseComponents/BaseForm.vue')[`default`]
    UIChip: typeof import('./baseComponents/BaseInputChip.vue')[`default`]
    UIPlaceholder: typeof import('./baseComponents/BasePlaceholder.vue')[`default`]
  }
}

export {}