#### some things to remember
## in git head is a pointer which help us to travel in commits
## we can attach and dettach a head from a branch
## you can travel through commitid, branchname and head~<number> number 0 is current position if we incrase the number we are going down in commit history

#### git commands

### initial comands
```bash
# git init
```

```bash
# git add <filename>
```
=> to add a file in staged area

```bash
# git restore --staged <filename>
```
=> to remove a file from staged area

```bash
# git commit -m <message about commit>
```
=> you can give -am flag to skip the staging area

### reseting commit
## if you mistakenly created a commit you can reset it , reset means which commit state we want to reach
```bash
# git reset --<(hard flag) for permanent delete,(soft flag) commit history will delete but it remains in staged area,(mixed flag) commit history will delete but it remains in changes area> <commitId>
```
=> used to delete commit history until head reched the passed commitId 

## if you mistakenly reseted a commit
```bash
# git reflog
```
=> it will show previous head positions so you can see reseted commit id and then restest to where you were

```bash
# git reset --hard <deleted commit id>
```

### branches
```bash
# git branch <branchname>
```

```bash
# git branch --delete <branchname>
```
=> branch delete works when there is no commit or branch is merged linerly

```bash
# git branch -D <branchname>
```
=> branch delete works when there any commit

```bash
# git checkout <branchname> or <commitid>
```
=> used to navigate head

```bash
# git checkout head~<number>
```
=> head is use to tell where we are and where we will be commit be, here the number if 0 it represent its current position and if we increase the number it will go to down in commits

```bash
# git branch -m <old-branch-name> <new-branch-name>
```
=> renaming the branch

### merging
```bash
# git merge <branchname jo merge hone wali hai working branch se>
```

## if you want a single commit to merge in your branch and dont want whole branch to merge you cant do cherry-pick
```bash
# git cherry-pick <commitid>
```

## if a conflict comes in a same line when merging a branch to your branch you can choose which code you want in final code and do merge or if you dont want to make a disition you can abort by giving a flag of --abort
```bash
# git merge --abort
```

### github commands
```bash
# git remote show origin
```

```bash
# git remote add <name of remote repo> <github new repo link to be connect>
```
=> to connect to online github repo

```bash
# git push origin -u <branch name to be puched in github repo>
```

```bash
# git fetch
```
=> it fetches/backup the code from github repo

```bash
# git merge origin <remote branch name>
```
=> if you want to merge your local branch to remote branch

```bash
# git pull
```
=> it fetches/backup the code from github repo and murges the local branch to the origin branch because it can be possible that the origin has more commits then local branch so we merge also its like fetch and merge combine

## if you want to clone a github repo
```bash
# git clone <repolink>
```

### reverting
## if we mistakenly pushed a wrong commit in github repo
```bash
# git revert <commit id which is mistakenly pushed>
```
=> it will not reset the commit, it will make another commit which will remove the changes of wrong commit, but wrong commit will stay in previous one locally you can then push it to github

```bash
# git revert fromcommitid/OR/headvalue>..tocommitid/OR/>headvalue
```
=> you want a range revert, like reverting multiple commits you can give a range

## if we pass a --no-commit flag while reverting a range it will revert a range and send into staged area so you can do a range of revert in a single commit you can cancel it by
```bash
# git revert --abort
```

### git logs
```bash
# git log
```
=> logs ids of commits of current working branch

```bash
# git log --all
```
=> logs ids of commits of all branch sorted by time iguess

```bash
# git log --all --oneline
```

```bash
# git log --all --oneline --graph
```

### blob, tree and commit object reading method
```bash
# git cat-file -p <commitId>
```

### stachingg
```bash
# git stash -m "message of stash"
```
=> if you changed a file and the full change is not done and you have work another branch you can stach a change so you can work in an other branch. cuz you cant checkout into another branch before commit a change

```bash
# git stash list
```
=> print list of stashes for you can apply it later

```bash
# git stash apply <stash index number you can find in list>
```
=> to apply the stash

```bash
# git stash drop <stash index number you can find in list>
```
-> if the stash work is done you can delete a single stash with stash index number

```bash
# git stash clear
```
=> to delete all stashes and once

### .gitignore
## if you want to ignore a pre tracking file you can rm
```bash
# git rm --cached <filename>
```
=> it will delete the file from git history and then you can ignore that file also with .gitignore 

## if you want a folder to delete from git history you can pass -r flag

### git tips 
## if you deleted a file and you want to restore it you can go to a commit where this file was exist and you name the file it will get the file in staging area
```bash
# git checkout <commit it where the file exist or not deleted> <deleted file name>
```
=> and then you can create a new commit

```bash
# git config --global -e
```
=> it will open the config file of git

## alternative way of switching in branches like checkout
```bash
# git switch <branch name>
```
=> you can pass -C flag to create also if the branch is not exits

## if you want to revert after you merged a branch. it is difficult to revert by simple command cause we have two choices where we can revert, 1st where you merged and 2nd is from which branch you merged so you can pass a -m flag and number (1) for chosing branch where you merged and (2) from where you merged
```bash
# git revert <commit id to be revert> -m <(1) or (2)>
```
```bash
#git config user.name 
#git config user.email
```
=> git user info
