import React from 'react';
import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
// import AdminProductListPage from './AdminProductListPage';
import AdminOrderListPage from './AdminOrderListPage';
// import AdminUserListPage from './AdminUserListPage';

const AdminDashboardPage = () => {
    let { path, url } = useRouteMatch();

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
            <div className="flex flex-col md:flex-row gap-8">
                {/* Admin Navigation */}
                <div className="md:w-1/4">
                    <div className="bg-white p-4 rounded-lg shadow-md space-y-2">
                        <NavLink to={`${url}/products`} className="block w-full text-left p-3 rounded-md" activeClassName="bg-teal-100 text-teal-700 font-semibold" >
                            Products
                        </NavLink>
                        <NavLink to={`${url}/orders`} className="block w-full text-left p-3 rounded-md" activeClassName="bg-teal-100 text-teal-700 font-semibold">
                            Orders
                        </NavLink>
                        <NavLink to={`${url}/users`} className="block w-full text-left p-3 rounded-md" activeClassName="bg-teal-100 text-teal-700 font-semibold">
                            Users
                        </NavLink>
                    </div>
                </div>

                {/* Admin Content */}
                <div className="md:w-3/4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <Switch>
                            <Route path={`${path}/products`} component={AdminProductListPage} />
                            <Route path={`${path}/orders`} component={AdminOrderListPage} />
                            <Route path={`${path}/users`} component={AdminUserListPage} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;