import QuickMenuIcon from "./QuickMenuIcon";

function QuickAccessMenu(){
    return (
      <div className="container mx-auto px-4 md:px-8 py-4 bg-white rounded-lg">
        <div className="text-center font-medium text-blue-500">Akses Cepat</div>
        
        <div className="flex flex-row py-5 px-5 justify-center">
            <QuickMenuIcon bgColor="bg-orange-300" label="Registrasi" />
            
            <QuickMenuIcon bgColor="bg-blue-300" label="KRS/KHS"/>
            
            <QuickMenuIcon bgColor="bg-purple-300" label="Mata Kuliah"/>
            
            <QuickMenuIcon bgColor="bg-green-300" label="MBKM"/>
            
            <QuickMenuIcon bgColor="bg-red-300" label="Manual Book"/>
            
            <QuickMenuIcon bgColor="bg-yellow-300" label="Tagihan"/>
            
        </div>
      </div>  
        
    );
}

export default QuickAccessMenu;