import "./css/Normalize.css";
import "./css/App.css";
import "./css/Custom.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
import InformationDisclosures from "./pages/InformationDisclosures/InformationDisclosures";
import InformationDisclosuresItem from "./pages/InformationDisclosures/InformationDisclosuresItem";
import Filials from "./pages/Filials";
import Filial from "./pages/Filial";
import About from "./pages/About";
import History from "./pages/History";
import Goals from "./pages/Goals";
import MainDirections from "./pages/MainDirections";
import Recuisites from "./pages/Recuisites";
import AntiCorruption from "./pages/AntiCorruption";
import Certs from "./pages/Certs/Certs";
import Gardeners from "./pages/Gardeners";
import ContactForMedia from "./pages/ContactForMedia";
import News from "./pages/News";
import Consumers from "./pages/Consumers";
import Territory from "./pages/consumers/Territory";
import AdditionalServices from "./pages/consumers/AdditionalServices/AdditionalServices";
import ServicePassports from "./pages/consumers/ServicePassports";
import Page404 from "./pages/Page404";
import TechnologicalConnection from "./pages/consumers/TechnologicalConnection";
import ElectricityAccounting from "./pages/consumers/ElectricityAccounting";
import PlannedOutages from "./pages/consumers/PlannedOutages";
import CustomerService from "./pages/consumers/CustomerService";
import RegulatoryLegalActs from "./pages/consumers/RegulatoryLegalActs";
import ConsolidationOfElectric from "./pages/consumers/ConsolidationOfElectric";
import ChargingStations from "./pages/consumers/ChargingStations";
import SaleOfItems from "./pages/consumers/SaleOfItems";
import AttentionFraud from "./pages/consumers/AttentionFraud";
import { useEffect } from "react";
import CreditRating from "./pages/CreditRating";
import ProductionPrograms from "./pages/consumers/ProductionPrograms";
import Plugme from "./pages/Plugme";
import SpecialProjects from "./pages/SpecialProjects/SpecialProjects";
import GosuslugiBanner from "./components/GosuslugiBanner";
import SecretDisconnect from "./components/Disconnect/SecretDisconnect";
import EventDetails from "./pages/SpecialProjects/EventDetails";
import InformationOnBonds from "./pages/InformationOnBonds";
import Vacancies from "./pages/Vacancy/Vacancies";
import Investors from "./pages/Investors/Investors";
import InvestorDetail from "./pages/Investors/InvestorDetail";
import CompanyRatings from "./pages/InformationDisclosures/CompanyRatings/CompanyRatings";
import Universities from "./pages/Vacancy/Practice/Universities";
import VacanciesTwo from "./pages/Vacancy/VacanciesTwo";
import ProductionPrograms2025 from "./pages/consumers/ProductionPrograms2025";
import Test from "./pages/Test/Test";
import TwentyYears from "./pages/TwentyYears/TwentyYears";
import TerritoryOfService from "./pages/consumers/TerritoryOfService/TerritoryOfService";
import PassportsCommercialServices from "./pages/consumers/AdditionalServices/PassportsCommercialServices";

function App() {
  useEffect(() => {
    const event = new Event("rendered");
    document.dispatchEvent(event);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/informationDisclosures/:id"
            element={<InformationDisclosuresItem />}
          />
          {/* Новое раскрытие информации */}
          <Route
            path="/informationDisclosures"
            element={<Test />}
          />
          <Route
            path="/informationDisclosures/companyratings"
            element={<CompanyRatings />}
          />
          <Route path="/filials" element={<Filials />} />

          <Route path="/investors" element={<Investors />} />
          <Route path="/investors/:id" element={<InvestorDetail />} />

          <Route path="/filials/:id" element={<Filial />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/mainDirection" element={<MainDirections />} />
          <Route path="/requisites" element={<Recuisites />} />
          <Route path="/mycareer" element={<Vacancies />} />
          <Route path="/antiCorruption" element={<AntiCorruption />} />
          <Route path="/certs" element={<Certs />} />
          <Route path="/informationOnBonds" element={<InformationOnBonds />} />
          <Route path="/gardeners" element={<Gardeners />} />
          <Route path="/contactForMedia" element={<ContactForMedia />} />
          <Route path="/specialProjects" element={<SpecialProjects />} />
          <Route path="/specialProjects/:id" element={<EventDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/consumers" element={<Consumers />} />
          <Route path="/additionalServices" element={<AdditionalServices />} />
          <Route path="/passportscommercialservices" element={<PassportsCommercialServices />} />
          <Route path="/servicePassports" element={<ServicePassports />} />
          <Route path="/territory" element={<Territory />} />
          <Route path="/territoryOfService" element={<TerritoryOfService />} />
          <Route
            path="/technologicalConnection"
            element={<TechnologicalConnection />}
          />
          <Route
            path="/electricityAccounting"
            element={<ElectricityAccounting />}
          />
          <Route
            path="/regulatoryLegalActs"
            element={<RegulatoryLegalActs />}
          />
          <Route path="/customerService" element={<CustomerService />} />
          <Route path="/plannedOutages" element={<PlannedOutages />} />
          <Route
            path="/consumer/planovye-raboty/planovye-otklyucheniya"
            element={<PlannedOutages />}
          />
          <Route
            path="/consolidationOfElectric"
            element={<ConsolidationOfElectric />}
          />
          <Route path="/chargingStations" element={<ChargingStations />} />
          <Route path="/saleOfItems" element={<SaleOfItems />} />
          <Route path="/attentionFraud" element={<AttentionFraud />} />
          <Route
            path="/productionPrograms2024"
            element={<ProductionPrograms />}
          />
          <Route
            path="/productionPrograms2025"
            element={<ProductionPrograms2025 />}
          />
          <Route path="/plugme" element={<Plugme />} />
          <Route path="/creditRating" element={<CreditRating />} />
          <Route path="/secret" element={<SecretDisconnect />} />
          <Route path="/secrethr" element={<VacanciesTwo />} />
          {/* Старое Раскрытие информации */}
          <Route path="/test" element={<Test />} />
          <Route path="/20years" element={<TwentyYears />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <GosuslugiBanner />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
