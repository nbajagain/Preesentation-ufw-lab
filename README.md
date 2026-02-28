# CSP451 – Presentation Azure Demo
## Serverless E-Commerce API

### Student Name:
Nawaraj Bajagain

### Student ID:
110188232

---

## Project Overview
This project demonstrates a serverless e-commerce backend using Microsoft Azure services. 
It processes product data and customer orders using Azure Functions, Cosmos DB, and Service Bus.

---

## Azure Services Used
- Azure Functions (HTTP Trigger)
- Azure Cosmos DB (Product Catalog)
- Azure Service Bus (Order Queue)
- Logic Apps (Optional – Notifications)
- API Management (Optional – Gateway Layer)

---

## Architecture Flow

Client → Azure Function (PlaceOrder) → Service Bus Queue → Backend Processing  
Client → Azure Function (GetProducts) → Cosmos DB

---

## Business Value
This architecture provides:
- Auto-scaling serverless infrastructure
- Asynchronous order processing
- Cost efficiency with consumption-based pricing
- High availability and reliability

---

## Estimated Monthly Cost

| Service | Estimated Cost (CAD) |
|---------|----------------------|
| Azure Functions | $5 |
| Cosmos DB | $25 |
| Service Bus | $10 |
| Storage | $5 |
| Total | ~$45/month |

---

## GitHub Source Code
Contains Azure Function JavaScript files and architecture assets.
