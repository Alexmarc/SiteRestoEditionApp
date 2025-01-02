import React, { useState } from 'react';
import { format } from 'date-fns';
import Button from './shared/Button';

export default function DeployButton() {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeploy = async () => {
    try {
      const timestamp = format(new Date(), "yyyy_MM_dd_HH_mm_ss_'GMT'");
      const archiveName = `archive_restaurant_FR_${timestamp}.zip`;
      console.log(`Deploying configuration with archive: ${archiveName}`);
      setShowConfirm(false);
    } catch (error) {
      console.error('Deployment failed:', error);
    }
  };

  return (
    <>
      <Button
        onClick={() => setShowConfirm(true)}
        variant="primary"
        size="lg"
        className="w-full sm:w-auto"
      >
        Déployer la configuration
      </Button>

      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Confirmation de déploiement
            </h3>
            <p className="text-gray-600 mb-6">
              Attention vous allez déployer toute la configuration et non uniquement l'onglet actif
            </p>
            <div className="flex justify-end space-x-4">
              <Button
                variant="secondary"
                onClick={() => setShowConfirm(false)}
              >
                Annuler
              </Button>
              <Button
                variant="primary"
                onClick={handleDeploy}
              >
                Déployer
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}