import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Activity, Users, ShoppingCart, Target, Settings, TestTube2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EnhancedNavigation from '@/components/navigation/EnhancedNavigation';
import Footer from '@/components/ui/footer';
import { 
  toggleFeatureFlag, 
  setABTestVariant, 
  getActiveExperiments, 
  FEATURE_FLAGS 
} from '@/utils/featureFlags';
import { mockAnalyticsData, toggleDemoMode, isDemoMode } from '@/data/mockData';
import { trackEvent } from '@/utils/analytics';
import { useScrollPosition } from '@/hooks/useScrollPosition';

const AnalyticsDashboard = () => {
  const scrollPosition = useScrollPosition();
  const [experiments, setExperiments] = useState<Record<string, string>>({});
  const [demoMode, setDemoMode] = useState(isDemoMode());

  useEffect(() => {
    setExperiments(getActiveExperiments());
  }, []);

  const handleToggleFeature = (flagName: string) => {
    toggleFeatureFlag(flagName);
    setExperiments(getActiveExperiments());
    
    trackEvent('feature_flag_toggle', {
      flag_name: flagName,
      source: 'admin_dashboard'
    });
  };

  const handleSetVariant = (testName: string, variant: string) => {
    setABTestVariant(testName, variant);
    setExperiments(getActiveExperiments());
    
    trackEvent('ab_test_variant_force', {
      test_name: testName,
      variant_name: variant,
      source: 'admin_dashboard'
    });
  };

  const handleToggleDemoMode = () => {
    const newMode = toggleDemoMode();
    setDemoMode(newMode);
    
    trackEvent('demo_mode_toggle', {
      enabled: newMode,
      source: 'dashboard'
    });
  };

  return (
    <div className="min-h-screen bg-kaeru-black">
      <EnhancedNavigation scrollPosition={scrollPosition} />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif text-gold mb-4">
              Analytics & Testing Dashboard
            </h1>
            <p className="text-kaeru-fog text-lg max-w-2xl mx-auto">
              Monitor performance, track user behavior, and manage A/B tests
            </p>
          </motion.div>

          <Tabs defaultValue="analytics" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 bg-kaeru-stone/10">
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="experiments">A/B Tests</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-kaeru-stone/10 border-gold/20">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-kaeru-fog">Page Views</CardTitle>
                    <Users className="h-4 w-4 text-gold" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">{mockAnalyticsData.pageViews.toLocaleString()}</div>
                    <p className="text-xs text-kaeru-fog">+12% from last week</p>
                  </CardContent>
                </Card>

                <Card className="bg-kaeru-stone/10 border-gold/20">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-kaeru-fog">Add to Cart</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-gold" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">{mockAnalyticsData.addToCartEvents}</div>
                    <p className="text-xs text-kaeru-fog">+8% from last week</p>
                  </CardContent>
                </Card>

                <Card className="bg-kaeru-stone/10 border-gold/20">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-kaeru-fog">Ritual Builder</CardTitle>
                    <Target className="h-4 w-4 text-gold" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">{mockAnalyticsData.ritualBuilderCompletions}</div>
                    <p className="text-xs text-kaeru-fog">Completions this week</p>
                  </CardContent>
                </Card>

                <Card className="bg-kaeru-stone/10 border-gold/20">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-kaeru-fog">Easter Eggs</CardTitle>
                    <Activity className="h-4 w-4 text-gold" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-white">{mockAnalyticsData.easterEggsFound}</div>
                    <p className="text-xs text-kaeru-fog">Found by users</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-kaeru-stone/10 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-white">Conversion Funnel</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-kaeru-fog">Page Views</span>
                    <span className="text-white font-medium">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-kaeru-fog">Product Views</span>
                    <span className="text-white font-medium">45%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-kaeru-fog">Add to Cart</span>
                    <span className="text-white font-medium">12%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-kaeru-fog">Checkout</span>
                    <span className="text-white font-medium">7.1%</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* A/B Tests Tab */}
            <TabsContent value="experiments" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-kaeru-stone/10 border-gold/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <TestTube2 className="w-5 h-5 mr-2" />
                      Button Color Test
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-kaeru-fog">Testing gold vs jade button colors</p>
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handleSetVariant(FEATURE_FLAGS.GOLDEN_BUTTONS, 'gold')}
                        variant={experiments[FEATURE_FLAGS.GOLDEN_BUTTONS] === 'gold' ? 'default' : 'outline'}
                        size="sm"
                      >
                        Gold
                      </Button>
                      <Button
                        onClick={() => handleSetVariant(FEATURE_FLAGS.GOLDEN_BUTTONS, 'jade')}
                        variant={experiments[FEATURE_FLAGS.GOLDEN_BUTTONS] === 'jade' ? 'default' : 'outline'}
                        size="sm"
                      >
                        Jade
                      </Button>
                    </div>
                    <p className="text-sm text-kaeru-fog">
                      Current: {experiments[FEATURE_FLAGS.GOLDEN_BUTTONS] || 'gold'}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-kaeru-stone/10 border-gold/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <TestTube2 className="w-5 h-5 mr-2" />
                      Ritual Builder Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-kaeru-fog">Testing 2-step vs 3-step flow</p>
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handleSetVariant(FEATURE_FLAGS.RITUAL_BUILDER_STEPS, '2-step')}
                        variant={experiments[FEATURE_FLAGS.RITUAL_BUILDER_STEPS] === '2-step' ? 'default' : 'outline'}
                        size="sm"
                      >
                        2 Steps
                      </Button>
                      <Button
                        onClick={() => handleSetVariant(FEATURE_FLAGS.RITUAL_BUILDER_STEPS, '3-step')}
                        variant={experiments[FEATURE_FLAGS.RITUAL_BUILDER_STEPS] === '3-step' ? 'default' : 'outline'}
                        size="sm"
                      >
                        3 Steps
                      </Button>
                    </div>
                    <p className="text-sm text-kaeru-fog">
                      Current: {experiments[FEATURE_FLAGS.RITUAL_BUILDER_STEPS] || '3-step'}
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-kaeru-stone/10 border-gold/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <TestTube2 className="w-5 h-5 mr-2" />
                      Product Card Layout
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-kaeru-fog">Testing different card designs</p>
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handleSetVariant(FEATURE_FLAGS.PRODUCT_CARD_LAYOUT, 'standard')}
                        variant={experiments[FEATURE_FLAGS.PRODUCT_CARD_LAYOUT] === 'standard' ? 'default' : 'outline'}
                        size="sm"
                      >
                        Standard
                      </Button>
                      <Button
                        onClick={() => handleSetVariant(FEATURE_FLAGS.PRODUCT_CARD_LAYOUT, 'enhanced')}
                        variant={experiments[FEATURE_FLAGS.PRODUCT_CARD_LAYOUT] === 'enhanced' ? 'default' : 'outline'}
                        size="sm"
                      >
                        Enhanced
                      </Button>
                      <Button
                        onClick={() => handleSetVariant(FEATURE_FLAGS.PRODUCT_CARD_LAYOUT, 'minimal')}
                        variant={experiments[FEATURE_FLAGS.PRODUCT_CARD_LAYOUT] === 'minimal' ? 'default' : 'outline'}
                        size="sm"
                      >
                        Minimal
                      </Button>
                    </div>
                    <p className="text-sm text-kaeru-fog">
                      Current: {experiments[FEATURE_FLAGS.PRODUCT_CARD_LAYOUT] || 'enhanced'}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Performance Tab */}
            <TabsContent value="performance" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-kaeru-stone/10 border-gold/20">
                  <CardHeader>
                    <CardTitle className="text-white">Core Web Vitals</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-kaeru-fog">FCP</span>
                      <span className="text-green-400">1.2s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-kaeru-fog">LCP</span>
                      <span className="text-green-400">2.1s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-kaeru-fog">CLS</span>
                      <span className="text-green-400">0.05</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-kaeru-stone/10 border-gold/20">
                  <CardHeader>
                    <CardTitle className="text-white">Performance Budget</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-kaeru-fog">Total Size</span>
                      <span className="text-yellow-400">1.8MB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-kaeru-fog">Images</span>
                      <span className="text-green-400">820KB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-kaeru-fog">Scripts</span>
                      <span className="text-green-400">450KB</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-kaeru-stone/10 border-gold/20">
                  <CardHeader>
                    <CardTitle className="text-white">Error Tracking</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-kaeru-fog">JS Errors</span>
                      <span className="text-green-400">2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-kaeru-fog">Failed Resources</span>
                      <span className="text-green-400">0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-kaeru-fog">Error Rate</span>
                      <span className="text-green-400">0.1%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <Card className="bg-kaeru-stone/10 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Settings className="w-5 h-5 mr-2" />
                    Feature Flags
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.values(FEATURE_FLAGS).map((flag) => (
                    <div key={flag} className="flex items-center justify-between">
                      <span className="text-kaeru-fog capitalize">
                        {flag.replace(/_/g, ' ')}
                      </span>
                      <Button
                        onClick={() => handleToggleFeature(flag)}
                        variant={experiments[flag] ? 'default' : 'outline'}
                        size="sm"
                      >
                        {experiments[flag] ? 'Enabled' : 'Disabled'}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-kaeru-stone/10 border-gold/20">
                <CardHeader>
                  <CardTitle className="text-white">Demo Mode</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-kaeru-fog">
                    Demo mode uses mock data for testing without real products
                  </p>
                  <Button
                    onClick={handleToggleDemoMode}
                    variant={demoMode ? 'default' : 'outline'}
                  >
                    {demoMode ? 'Demo Mode: ON' : 'Demo Mode: OFF'}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AnalyticsDashboard;