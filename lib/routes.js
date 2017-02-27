//FlowRouter is a package that handles the routing of layouts
FlowRouter.route('/', {
name: 'home',
action(){
    BlazeLayout.render('HomeLayout');
}
});

FlowRouter.route('/learn', {
name: 'learn',
action(){
    //here we are rendering the "Test" template into the MainLayout template... 
    BlazeLayout.render('MainLayout', {main: 'Questions'});
}
});

FlowRouter.route('/tasks', {
name: 'tasks',
action(){
    BlazeLayout.render('TaskLayout', {main: 'TaskTemp'});
}
});

FlowRouter.route('/projects', {
name: 'tasks',
action(){
    BlazeLayout.render('ProjectLayout', {main: 'ProjTemp'});
}
});
