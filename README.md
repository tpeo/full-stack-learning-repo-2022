# Full Stack Learning Repository Fall 2022

Welcome new Engineering fellows! This respotiory will serve as our Fall 2022 Engineering Full-Stack Curriculum, including slides, and homework.

Full-stack engineering is about using technology to implement and automate solutions to real-world problems. A full-stack engineer constantly weighs the pros/cons of many different solutions, tools, and ideas. There are many ways to solve any given problem, but finding the most elegant solution often takes much deliberation and a vast amount of knowledge.

Here's what you'll learn from this course:

1. How to think about real-world problems and design software solutions
2. Learn the basics of how to make and deploy websites, API's, and web apps
3. How to navigate the ever-changing ocean of technology and stay up-to-date

## Useful Links

[TPEO Slack](https://join.slack.com/t/txproduct/shared_invite/enQtOTMzOTYxMjYzMDU3LWMyODI2NGM4ZDlmODUwZTc0MTlmMGYxNDM5YjI5ZThkYzYwODA4MTQwMTJhMWM4NjdjZTlkMTRjZGU4MDUxNTE)

[TPEO Main Website](https://txproduct.org/Full-Stack-Engineering-bb7fd893a34c4cdb909a5ffb4ccea3a3)

[Engineering Lesson Slides on Google Drive](https://drive.google.com/drive/folders/15AveQkwuQw6uijFfa7o9sJgPdRzQxkR9?usp=sharing)

[Recordings for Lectures (TBD)](https://drive.google.com/drive/folders/1HFL9_G9fV75kmi2r5urgElj8kPPW8Whg?usp=sharing)

# Roadmap

- Week 1: Git & HTML
- Week 2: HTML, CSS, & JS
- Week 3: JS in Browser & APIs
- Week 4: ReactJS & Web Frameworks
- Week 5: Advanced ReactJS
- Week 6: Intro to Backend Dev & Databases
- Week 7: Authentication, Authorization, & Middleware
- Week 8: Cross Collaboration & Project Management
- Week 9: File Storage & Hosting
- Week 10: Advanced Web Topics

# Fork Environment

This repository will be following a fork structure, meaning that fellows will **commit to their own local respository** while **pulling new weekly content from this one upstream**. Weekly content will be updated on the master branch, but a copy of all previous week's content will be available via branches.

**Note: From now on we will be referring to the tpeo/full-stack-learning-repo-2022 project as the **main** repo and your individual repository as the **forked\*\* repo.

## Forking the Repository

Navigate to a directory where you'd like to keep all your projects. If you haven't already, we would recommend creating a folder like `GitHub_Projects` or `TPEO`.

1. Go onto the **main** repository's Github page and click the **Fork** button
2. Clone the repository locally in your project folder of choice by performing
   ```
   git clone <your-repo-url>
   ```
3. We need to set the **forked** repo's upstream url, allowing you to pull changes from the **main**, perform
   ```
   git remote add upstream https://github.com/tpeo/full-stack-learning-repo-2022.git
   ```
4. Verify that the forked repo has the following remote properties by performing `git remote -v`
   ```
   $ git remote -v
   > origin    https://github.com/<YOUR_GITHUB_NAME>/full-stack-learning-repo-2022.git (fetch)
   > origin    https://github.com/<YOUR_GITHUB_NAME>/full-stack-learning-repo-2022.git(push)
   > upstream  https://github.com/tpeo/full-stack-learning-repo-2022.git (fetch)
   > upstream  https://github.com/tpeo/full-stack-learning-repo-2022.git (push)
   ```

## Commiting Changes To the Forked Repository

1. Add files
   ```
   git add <files>
   ```
2. Commit changes
   ```
   git commit -m"<YOUR MESSAGE HERE>"
   ```
3. Push
   ```
   git push origin main
   ```

## Pulling Changes From Main Repository

You should pull approximately every week when new content arrives. These steps will involve merging the main repository's `main` branch with a forked repository's `main` branch

1. Make sure you are on the appropriate branch
   ```
   git checkout main
   ```
2. Fetch Content from Main Repository
   ```
   git fetch upstream
   ```
3. Merge Upstream with current local branch
   ```
   git merge upstream/main
   ```

## Suggesting Changes to the Main Repository

We realize that like everyone, we're not perfect so we'd love to hear constructive feedback. To suggest a change, open a pull request to the main repository and we'll get on it ASAP. **Please DO NOT push directly to the main branch unless permitted to do so.**

## Homework

This course will include homework each week to reinforce your knowledge. For engineering fellows, homework is mandatory and is due by the next Tuesday of classes. We will try to provide feedback on the homework so please send us your email and forked repository at the following link.
