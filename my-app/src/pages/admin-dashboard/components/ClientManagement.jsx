import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ClientManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "TechCorp Solutions",
      email: "contact@techcorp.com",
      status: "active",
      projects: 3,
      lastActivity: "2 hours ago",
      avatar: "https://images.unsplash.com/photo-1701383287245-5c4096b68564",
      avatarAlt: "Modern office building with glass facade representing TechCorp Solutions"
    },
    {
      id: 2,
      name: "Digital Marketing Pro",
      email: "hello@digitalmarketing.com",
      status: "active",
      projects: 2,
      lastActivity: "1 day ago",
      avatar: "https://images.unsplash.com/photo-1723400166060-88cf0e55391e",
      avatarAlt: "Creative workspace with marketing materials and laptop representing Digital Marketing Pro"
    },
    {
      id: 3,
      name: "StartupVenture Inc",
      email: "team@startupventure.io",
      status: "pending",
      projects: 1,
      lastActivity: "3 days ago",
      avatar: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      avatarAlt: "Modern startup office space with collaborative work environment"
    },
    {
      id: 4,
      name: "E-commerce Giants",
      email: "support@ecommerce.com",
      status: "inactive",
      projects: 5,
      lastActivity: "1 week ago",
      avatar: "https://images.unsplash.com/photo-1719859615057-e692ca7c4fae",
      avatarAlt: "Large warehouse with organized inventory representing E-commerce Giants"
    }
  ]);

  useEffect(() => {
    // AOS import kore initialize kora
    const initAOS = async () => {
      const AOS = await import('aos');
      AOS.init({
        duration: 800,
        once: false, // false kore dile sob bar animate hobe
        mirror: true, // scroll up korleo animate hobe
      });
    };

    initAOS();
  }, []);

  // Add new client function
  const handleAddClient = () => {
    const newClient = {
      id: clients.length + 1,
      name: `New Client ${clients.length + 1}`,
      email: `client${clients.length + 1}@example.com`,
      status: "pending",
      projects: 0,
      lastActivity: "Just now",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      avatarAlt: "New client avatar"
    };
    
    setClients(prevClients => [newClient, ...prevClients]);
    console.log("New client added:", newClient);
    
    // Success notification (you can replace with toast notification)
    alert(`New client "${newClient.name}" added successfully!`);
  };

  // View client details
  const handleViewClient = (client) => {
    console.log("Viewing client:", client);
    alert(`Viewing: ${client.name}\nEmail: ${client.email}\nStatus: ${client.status}\nProjects: ${client.projects}`);
  };

  // Edit client
  const handleEditClient = (client) => {
    console.log("Editing client:", client);
    
    const newName = prompt("Enter new client name:", client.name);
    const newEmail = prompt("Enter new email:", client.email);
    
    if (newName && newEmail) {
      setClients(prevClients =>
        prevClients.map(c =>
          c.id === client.id
            ? { ...c, name: newName, email: newEmail }
            : c
        )
      );
      alert(`Client "${client.name}" updated successfully!`);
    }
  };

  // More options menu
  const handleMoreOptions = (client) => {
    console.log("More options for client:", client);
    
    const action = prompt(
      `More options for ${client.name}:\n\n1. Change Status\n2. Add Project\n3. Send Email\n4. Delete Client\n\nEnter option number:`
    );

    switch (action) {
      case "1":
        const newStatus = prompt("Enter new status (active/pending/inactive):", client.status);
        if (newStatus && ['active', 'pending', 'inactive'].includes(newStatus)) {
          setClients(prevClients =>
            prevClients.map(c =>
              c.id === client.id ? { ...c, status: newStatus } : c
            )
          );
          alert(`Status updated to: ${newStatus}`);
        }
        break;
      
      case "2":
        setClients(prevClients =>
          prevClients.map(c =>
            c.id === client.id ? { ...c, projects: c.projects + 1 } : c
          )
        );
        alert(`Project added! Total projects: ${client.projects + 1}`);
        break;
      
      case "3":
        const subject = prompt("Enter email subject:");
        if (subject) {
          console.log(`Sending email to ${client.email} with subject: ${subject}`);
          alert(`Email sent to ${client.name}!`);
        }
        break;
      
      case "4":
        if (confirm(`Are you sure you want to delete ${client.name}?`)) {
          setClients(prevClients => prevClients.filter(c => c.id !== client.id));
          alert(`Client "${client.name}" deleted successfully!`);
        }
        break;
      
      default:
        console.log("No valid option selected");
    }
  };

  // Update last activity timestamp
  const updateLastActivity = (clientId) => {
    setClients(prevClients =>
      prevClients.map(client =>
        client.id === clientId
          ? { ...client, lastActivity: "Just now" }
          : client
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-success text-success-foreground';
      case 'pending':
        return 'bg-warning text-warning-foreground';
      case 'inactive':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const filteredClients = clients?.filter((client) =>
    client?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
    client?.email?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  return (
    <div 
      className="p-6 border rounded-lg bg-card border-border"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="800"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 
          className="text-lg font-semibold text-card-foreground"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-once="false"
        >
          Client Management
        </h3>
        <Button 
          variant="default" 
          iconName="UserPlus" 
          iconPosition="left" 
          size="sm"
          onClick={handleAddClient}
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-once="false"
        >
          Add Client
        </Button>
      </div>
      
      <div 
        className="mb-4"
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-once="false"
      >
        <Input
          type="search"
          placeholder="Search clients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e?.target?.value)}
          className="max-w-sm"
        />
      </div>
      
      <div className="space-y-3">
        {filteredClients?.map((client, index) => (
          <div 
            key={client?.id} 
            className="flex items-center justify-between p-4 transition-colors duration-150 border rounded-md border-border hover:bg-muted/30"
            data-aos="fade-right"
            data-aos-delay={400 + (index * 100)}
            data-aos-duration="600"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <div className="flex items-center space-x-4">
              <img
                src={client?.avatar}
                alt={client?.avatarAlt}
                className="object-cover w-10 h-10 rounded-full"
                data-aos="zoom-in"
                data-aos-delay={500 + (index * 100)}
                data-aos-once="false"
              />
              <div>
                <h4 className="text-sm font-medium text-card-foreground">{client?.name}</h4>
                <p className="text-xs text-muted-foreground">{client?.email}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Projects: {client?.projects}</p>
                <p className="text-xs text-muted-foreground">Last: {client?.lastActivity}</p>
              </div>
              
              <span 
                className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(client?.status)}`}
                data-aos="zoom-in"
                data-aos-delay={600 + (index * 100)}
                data-aos-once="false"
              >
                {client?.status}
              </span>
              
              <div className="flex items-center space-x-1">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  iconName="Eye"
                  onClick={() => {
                    handleViewClient(client);
                    updateLastActivity(client.id);
                  }}
                  data-aos="fade-left"
                  data-aos-delay={700 + (index * 100)}
                  data-aos-once="false"
                />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  iconName="Edit"
                  onClick={() => {
                    handleEditClient(client);
                    updateLastActivity(client.id);
                  }}
                  data-aos="fade-left"
                  data-aos-delay={750 + (index * 100)}
                  data-aos-once="false"
                />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  iconName="MoreHorizontal"
                  onClick={() => {
                    handleMoreOptions(client);
                    updateLastActivity(client.id);
                  }}
                  data-aos="fade-left"
                  data-aos-delay={800 + (index * 100)}
                  data-aos-once="false"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state */}
      {filteredClients.length === 0 && (
        <div 
          className="py-8 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-muted-foreground">No clients found</p>
          <Button 
            variant="outline" 
            size="sm" 
            className="mt-2"
            onClick={handleAddClient}
          >
            Add Your First Client
          </Button>
        </div>
      )}
    </div>
  );
};

export default ClientManagement;