import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import StatsCard from './components/StatsCard';
import QuickActions from './components/QuickActions';
import RecentActivity from './components/RecentActivity';
import SystemHealth from './components/SystemHealth';
import ClientManagement from './components/ClientManagement';
import AnalyticsChart from './components/AnalyticsChart';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AdminDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');

  // Mock credentials for admin authentication
  const mockCredentials = {
    email: 'admin@devcraft.com',
    password: 'DevCraft2024!'
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    });

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Check if user is already authenticated
    const authStatus = localStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }

    return () => clearInterval(timer);
  }, []);

  const handleLogin = (e) => {
    e?.preventDefault();
    setLoginError('');

    if (loginForm?.email === mockCredentials?.email && loginForm?.password === mockCredentials?.password) {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuthenticated', 'true');
    } else {
      setLoginError('Invalid credentials. Use admin@devcraft.com / DevCraft2024!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
    setLoginForm({ email: '', password: '' });
  };

  const handleInputChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e?.target?.name]: e?.target?.value
    });
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#071428">
        <Header />
        <div className="flex items-center justify-center min-h-screen px-4 pt-16">
          <div 
            className="w-full max-w-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div 
              className="p-8 bg-gray-900 border border-gray-700 rounded-lg shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="mb-8 text-center">
                <div 
                  className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-500 to-green-500"
                  data-aos="flip"
                  data-aos-delay="300"
                >
                  <Icon name="Shield" size={32} color="white" />
                </div>
                <h1 className="text-2xl font-bold text-white">Admin Access</h1>
                <p className="mt-2 text-gray-400">Sign in to access the admin dashboard</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div data-aos="fade-right" data-aos-delay="400">
                  <label className="block mb-2 text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={loginForm?.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter admin email"
                    required
                  />
                </div>

                <div data-aos="fade-left" data-aos-delay="500">
                  <label className="block mb-2 text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={loginForm?.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter admin password"
                    required
                  />
                </div>

                {loginError && (
                  <div 
                    className="p-3 border border-red-700 rounded-md bg-red-900/50"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    <p className="text-sm text-red-400">{loginError}</p>
                  </div>
                )}

                <Button 
                  type="submit" 
                  variant="default" 
                  fullWidth
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  Sign In to Dashboard
                </Button>
              </form>

              <div 
                className="p-4 mt-6 bg-gray-800 rounded-md"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <p className="text-xs text-center text-gray-400">
                  Demo Credentials:<br />
                  Email: admin@devcraft.com<br />
                  Password: DevCraft2024!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Dashboard
  return (
    <div className="min-h-screen bg-black">
      <Header />
      {/* Dashboard Header */}
      <div className="pt-16 text-white bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="px-6 py-8 mx-auto max-w-7xl lg:px-8">
          <div className="flex items-center justify-between">
            <div data-aos="fade-right" data-aos-delay="100">
              <h1 className="mb-2 text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-300">Welcome back! Here's what's happening with DevCraft Agency.</p>
              <div className="flex items-center mt-4 text-sm text-gray-400">
                <Icon name="Clock" size={16} className="mr-2" />
                <span>Last updated: {currentTime?.toLocaleString()}</span>
              </div>
            </div>
            <div 
              className="flex items-center space-x-4"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <Button 
                variant="outline" 
                iconName="Download" 
                iconPosition="left"
                className="text-white border-gray-600 hover:bg-gray-800"
              >
                Export Data
              </Button>
              <Button 
                variant="outline" 
                iconName="LogOut" 
                iconPosition="left"
                onClick={handleLogout}
                className="text-white border-gray-600 hover:bg-gray-800"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dashboard Content */}
      <div className="px-6 py-8 mx-auto max-w-7xl lg:px-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Projects"
            value="24"
            change="+12%"
            changeType="increase"
            icon="FolderOpen"
            color="blue"
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <StatsCard
            title="Active Clients"
            value="18"
            change="+8%"
            changeType="increase"
            icon="Users"
            color="green"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <StatsCard
            title="Monthly Revenue"
            value="$45.2K"
            change="+15%"
            changeType="increase"
            icon="DollarSign"
            color="purple"
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <StatsCard
            title="Conversion Rate"
            value="4.2%"
            change="-2%"
            changeType="decrease"
            icon="TrendingUp"
            color="orange"
            data-aos="fade-up"
            data-aos-delay="400"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8 mb-8 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-8 lg:col-span-2">
            <AnalyticsChart data-aos="fade-right" data-aos-delay="500" />
            <ClientManagement data-aos="fade-right" data-aos-delay="600" />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <QuickActions data-aos="fade-left" data-aos-delay="500" />
            <RecentActivity data-aos="fade-left" data-aos-delay="600" />
            <SystemHealth data-aos="fade-left" data-aos-delay="700" />
          </div>
        </div>

        {/* Additional Management Sections */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Content Management */}
          <div 
            className="p-6 bg-gray-900 border border-gray-700 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Content Management</h3>
              <Icon name="FileText" size={20} className="text-gray-400" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Blog Posts</span>
                <span className="text-sm font-medium text-white">12 Published</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Case Studies</span>
                <span className="text-sm font-medium text-white">8 Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Portfolio Items</span>
                <span className="text-sm font-medium text-white">24 Showcased</span>
              </div>
            </div>
            <Button variant="outline" size="sm" fullWidth className="mt-4 text-white border-gray-600 hover:bg-gray-800">
              Manage Content
            </Button>
          </div>

          {/* Team Management */}
          <div 
            className="p-6 bg-gray-900 border border-gray-700 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Team Management</h3>
              <Icon name="Users" size={20} className="text-gray-400" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Active Members</span>
                <span className="text-sm font-medium text-white">8 Online</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Pending Invites</span>
                <span className="text-sm font-medium text-white">2 Waiting</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Role Permissions</span>
                <span className="text-sm font-medium text-white">5 Roles</span>
              </div>
            </div>
            <Button variant="outline" size="sm" fullWidth className="mt-4 text-white border-gray-600 hover:bg-gray-800">
              Manage Team
            </Button>
          </div>

          {/* Security & Backup */}
          <div 
            className="p-6 bg-gray-900 border border-gray-700 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Security & Backup</h3>
              <Icon name="Shield" size={20} className="text-green-500" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Last Backup</span>
                <span className="text-sm font-medium text-white">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Security Scan</span>
                <span className="text-sm font-medium text-green-500">Clean</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">SSL Certificate</span>
                <span className="text-sm font-medium text-green-500">Valid</span>
              </div>
            </div>
            <Button variant="outline" size="sm" fullWidth className="mt-4 text-white border-gray-600 hover:bg-gray-800">
              Security Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;