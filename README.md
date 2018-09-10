# Mang.Ngx.Ui.Skeleton
An angular component library skeleton.

## Quickstart

### Step 1 - Dependencies
Install global dependencies:

```
yarn global add stylelint gulp
```

### Step 2 - Install Packages
Install all packages.

```
yarn install
```

### Step 3 - Project Compilation
Build project in JIT or AOT.

For JIT Compilation:
``` 
yarn build 
```
or
```
yarn rebuild
```

For AOT Compilation:
```
yarn build-aot
```
or
```
yarn rebuild-aot
```

Note: If you're watching for changes in the host, rebuild the first time, and then use `build` or `build-aot`

### Step 4 - Link to other libraries
To be able to link the library to other packages, be sure that the dist file is generated.
In terminal, change directory to the dist folder and type `yarn link`. 
Now you should be able to link this project into the others by typing `yarn link @mang/ngx-ui-skeleton`.