# Missions
- [x] Create a project with rails 7

# How i do it
## 1. Check your envs
Check your rails version
```
rails -v
-- 
Rails 7.1.3.2
```
Check your node version
```
node -v
--
v20.11.0
```

## 2. Initialize a new project
Make a file configuration to create a new project rails in your home directory

```
/your_app/.railsrc
```
My settings
```
--skip-action-mailer
--skip-action-mailbox
--skip-action-text
--skip-test
--skip-system-test
--database=postgresql
--css=tailwind
--javascript=esbuild
```

Create a new project using .railsrc
```
rails new . --rc=.railsrc
```

## 3. Check your project
```
rails s
```
Listening on http://127.0.0.1:3000
