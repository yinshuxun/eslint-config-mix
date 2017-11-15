# eslint-config-sx
    personal eslint plugins
    
# base  use
```
  npm install eslint-config-mix; // 安装
  //eslintrc中添加
  {
    root: true,
    extends: ['mix'],
    env: {
      browser: true
    },
    rules: {
      'header/header': 0
    }
  }
```

# react use
```
  npm install eslint-config-mix; // 安装
  //eslintrc中添加
  {
    extends: ['mix/react']
  }
```

# vue use (here is use eslint-config-alloy)
```
  npm install eslint-config-mix; // 安装
    //eslintrc中添加
    {
      extends: ['mix/vue']
    }
```
