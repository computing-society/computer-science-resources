# Contributing

Contributions are highly welcomed here. Most of the information was generated automatically, and we need your help to keep everything up-to-date. If you want to share resources for a particular class or topic, please to do so through our [Github repository](https://github.com/computing-society/computer-science-resources).

## New to Github?

If you are new to Github or to open-source development in general, please learn the basics of [git version control system](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners).
Once you've done that, proceed with the steps below.

## How to contribute?

#### 1. Fork our [Github repository](https://github.com/computing-society/computer-science-resources)

A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.

#### 2. Clone the repository you have just forked

```bash
git clone https://github.com/USERNAME/computer-science-resources.git
```

Obviously, go into that folder.

```bash
cd computer-science-resources
```

#### 3. Set the upstream

```
git remote add upstream https://github.com/computing-society/computer-science-resources.git
```

#### 4. Create a new branch

```
git checkout -b BRANCH_NAME
```

BRANCH_NAME can be anything you want.

#### 5. Start the server

```
npm install -g gatsby-cli
npm start
```

#### 6. Make changes

All pages for courses are written in [Markdown](https://guides.github.com/features/mastering-markdown/) and are located in
`src/docs/courses`. Directly edit the file and add new resources under **Course topics**, students taking that course would love it!
It is not advised to touch the Gatsby application itself, unless you are proficient with it.

#### 7. Push changes

```
git add .
git commit -m "YOUR MESSAGE"
git push origin BRANCH_NAME
```

#### 8. Make a pull request

Open [github.com/computing-society/computer-science-resources](https://github.com/computing-society/computer-science-resources) and make a well written pull request.

#### 9. Wait for results

As of now, [@janarosmonaliev](https://github.com/janarosmonaliev) and [@sudara999](https://github.com/sudara999) are the maintainers
of the project. Your pull request will be reviewed and accepted/discarded based on the contents.

## Suggestions

You can request a material, resourse or a textbook by creating an issue in our [repository](https://github.com/computing-society/computer-science-resources/issues).
You can suggest a new feature or just ask a question from SKCS there as well.
