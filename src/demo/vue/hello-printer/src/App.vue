<template>
  <div id="app">
    <div id="nav-bootstrap">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <router-link aria-current="page" class="navbar-brand" to="/">Dymo sample project</router-link>
          <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link active aria-current="page" class="nav-link active" to="/">Home</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="mt-5">
      <router-view />
    </div>
  </div>
</template>
