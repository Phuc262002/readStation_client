<template>
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
      <template #extra>
        <NuxtLink href="/">
            <a-button type="primary">Back Home</a-button>
        </NuxtLink>
      </template>
    </a-result>
  </template>